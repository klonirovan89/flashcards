import { CardsResponse, GetCardsArgs } from '@/pages/cards/api/cards.type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardsApi = createApi({
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
    }
  },
  reducerPath: 'baseApi',
})

export const { useGetCardsQuery } = cardsApi
