import { router } from '@/router'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  credentials: 'include',
})

const mutex = new Mutex()

export const baseQueryWithRauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  const pathCheckEmail = router.state.location.pathname.startsWith('/check-email')
  const pathRecoverPassword = router.state.location.pathname.startsWith('/recover-password')
  const pathCreatePassword = router.state.location.pathname.startsWith('/create-new-password')

  console.log('pathCheckEmail: ' + pathCheckEmail)
  console.log('pathRecoverPassword: ' + pathRecoverPassword)
  console.log('pathCreatePassword: ' + pathCreatePassword)

  if (
    result.error &&
    result.error.status === 401 &&
    !pathCheckEmail &&
    !pathRecoverPassword &&
    !pathCreatePassword
  ) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      const refreshResult = await baseQuery(
        { method: 'POST', url: '/v1/auth/refresh-token' },
        api,
        extraOptions
      )

      if (refreshResult.meta?.response && refreshResult.meta.response.status === 204) {
        result = await baseQuery(args, api, extraOptions)
      } else {
        await router.navigate('/login')
      }
      release()
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
