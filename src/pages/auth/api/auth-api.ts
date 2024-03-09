import { LoginArgs, User } from '@/pages/auth/api/auth-types'
import { baseApi } from '@/services/base-api'

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
  }),
})

export const { useLoginMutation, useLogoutMutation, useMeQuery } = authApi
