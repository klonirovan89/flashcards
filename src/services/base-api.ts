import { baseQueryWithReauth } from '@/services/base-api-with-reauth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseAPI = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Cards', 'Auth'],
})
