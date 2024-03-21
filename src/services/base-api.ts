import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithRauth } from './base-api-with-reauth'

export const baseApi = createApi({
  baseQuery: baseQueryWithRauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Cards', 'Auth'],
})
