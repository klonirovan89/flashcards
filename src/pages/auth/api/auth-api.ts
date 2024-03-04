import { LoginArgs } from '@/pages/auth/api/auth-types'
import { baseAPI } from '@/services/base-api'

export const authApi = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      providesTags: ['Auth'],
      query: () => ({
        method: 'GET',
        url: `/v1/auth/me`,
      }),
    }),
    login: builder.mutation<void, LoginArgs>({
      invalidatesTags: ['Auth'],
      query: data => ({
        body: data,
        method: 'POST',
        url: `/v1/auth/login`,
      }),
    }),
  }),
})

export const { useGetMeQuery, useLoginMutation } = authApi
