import {
  CreateDecksArgs,
  Deck,
  DecksArgs,
  DecksResponse,
  MinMaxCards,
  UpdateDecksArgs,
} from '@/pages/decks/api/decks-types'
import { baseApi } from '@/services/base-api'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDecks: builder.mutation<Deck, CreateDecksArgs>({
        invalidatesTags: ['Decks'],
        query: body => {
          const formData = new FormData()

          if (body.cover) {
            formData.append('cover', body.cover)
          }

          formData.append('name', body.name)
          formData.append('isPrivate', String(body.isPrivate))

          return {
            body: formData,
            method: 'POST',
            url: `/v1/decks`,
          }
        },
      }),
      deleteDecks: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `/v1/decks/${id}`,
        }),
      }),
      getDeckById: builder.query<DecksArgs, { id: string }>({
        providesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'GET',
          url: `/v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<DecksResponse, DecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          method: 'GET',
          params: args ?? undefined,
          url: `/v2/decks`,
        }),
      }),
      getDecksMinMaxCards: builder.query<MinMaxCards, void>({
        providesTags: ['Decks'],
        query: () => ({
          method: 'GET',
          url: `/v2/decks/min-max-cards`,
        }),
      }),
      updateDecks: builder.mutation<Deck, UpdateDecksArgs>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `/v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDecksMutation,
  useDeleteDecksMutation,
  useGetDeckByIdQuery,
  useGetDecksMinMaxCardsQuery,
  useGetDecksQuery,
  useUpdateDecksMutation,
} = decksApi
