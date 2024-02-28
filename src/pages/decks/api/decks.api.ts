import { CreateDecksArgs, Decks, DecksArgs, DecksResponse } from '@/pages/decks/api/decks.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const decksApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      createDecks: builder.mutation<Decks, CreateDecksArgs>({
        invalidatesTags: ['Decks'],
        query: body => ({
          body,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDecks: builder.mutation<Decks, { id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),
      getDeckById: builder.query<DecksArgs, { id: string }>({
        providesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'GET',
          url: `v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<DecksResponse, DecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          method: 'GET',
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
      updateDecks: builder.mutation<Decks, { data: FormData; id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ data, id }) => ({
          body: data,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
  reducerPath: 'baseApi',
  tagTypes: ['Decks'],
})

export const {
  useCreateDecksMutation,
  useDeleteDecksMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useUpdateDecksMutation,
} = decksApi
