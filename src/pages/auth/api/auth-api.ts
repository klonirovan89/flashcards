import { baseApi } from '@/services/base-api'

import { LoginArgs, User } from '../../auth/api/auth-types'

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
    setMe: builder.mutation<User, { avatar?: File | null; name?: string }>({
      invalidatesTags: ['Auth'],
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
  }),
})

export const { useLoginMutation, useLogoutMutation, useMeQuery, useSetMeMutation } = authApi
