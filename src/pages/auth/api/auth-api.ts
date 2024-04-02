import { baseApi } from '@/services/base-api'

import {
  LoginArgs,
  PasswordRecovery,
  SignUpArgs,
  SignUpResponse,
  User,
} from '../../auth/api/auth-types'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, LoginArgs>({
      invalidatesTags: ['Auth'],
      query: data => ({
        body: data,
        method: 'POST',
        url: `/v1/auth/login`,
      }),
    }),
    logout: builder.mutation<void, void>({
      invalidatesTags: ['Auth'],
      query: () => ({
        method: 'POST',
        url: `/v1/auth/logout`,
      }),
    }),
    me: builder.query<User, void>({
      providesTags: ['Auth'],
      query: () => ({
        method: 'GET',
        url: `/v1/auth/me`,
      }),
    }),
    passwordRecovery: builder.mutation<void, PasswordRecovery>({
      query: body => ({
        body,
        method: 'POST',
        url: `/v1/auth/recover-password`,
      }),
    }),
    resetPassword: builder.mutation<void, { password: string; token: string }>({
      query: ({ password, token }) => ({
        body: { password },
        method: 'POST',
        url: `/v1/auth/reset-password/${token}`,
      }),
    }),
    setMe: builder.mutation<User, { avatar?: File | null; name?: string }>({
      // invalidatesTags: ['Auth'],
      async onQueryStarted(patch, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          baseApi.util.updateQueryData('me', undefined, draft => {
            let valueableObject = Object.fromEntries(
              Object.entries(patch).filter(
                ([_, value]) =>
                  !(
                    value === undefined ||
                    value === null ||
                    (typeof value === 'string' && !value.length)
                  )
              )
            )

            if (valueableObject.avatar) {
              valueableObject = {
                ...valueableObject,
                avatar: URL.createObjectURL(valueableObject.avatar),
              }
            }
            Object.assign(draft, valueableObject)
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      query: body => {
        const formData = new FormData()

        body.avatar && formData.append('avatar', body.avatar)

        body.name && formData.append('name', body.name)

        return {
          body: formData,
          method: 'PATCH',
          url: '/v1/auth/me',
        }
      },
    }),
    signUp: builder.mutation<SignUpResponse, SignUpArgs>({
      query: body => ({
        body: body ?? undefined,
        method: 'POST',
        url: `/v1/auth/sign-up`,
      }),
    }),
  }),
})

export const { useQueryState: useGetMeQueryState } = authApi.endpoints.me

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  usePasswordRecoveryMutation,
  useResetPasswordMutation,
  useSetMeMutation,
  useSignUpMutation,
} = authApi
