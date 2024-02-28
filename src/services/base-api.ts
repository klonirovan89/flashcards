import { CardsResponse, DecksResponse, GetCardsArgs, GetDecksArgs } from '@/services/type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getCards: builder.query<CardsResponse, GetCardsArgs>({
        query: args => ({
          params: args.params ? args.params : undefined,
          url: `v1/decks/${args.id}/cards`,
        }),
      }),
      getDecks: builder.query<DecksResponse, GetDecksArgs | void>({
        query: args => ({
          params: args ? args : undefined,
          url: `v2/decks`,
        }),
      }),
    }
  },
  reducerPath: 'baseApi',
})

export const { useGetCardsQuery, useGetDecksQuery } = baseApi
