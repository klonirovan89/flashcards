import {
  Card,
  CardsParams,
  CardsResponse,
  CardsSave,
  FormDataCards,
  GetCardsArgs,
  MinMaxCardType,
  RandomCardType,
} from '@/pages/cards/api/cards-types'
import { baseAPI } from '@/services/base-api'

export const cardsApi = baseAPI.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<Card, FormDataCards>({
        invalidatesTags: ['Cards'],
        query: ({ data, id }) => ({
          body: data,
          method: 'POST',
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      deleteCards: builder.mutation<Card, { id: string }>({
        invalidatesTags: ['Cards'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `/v1/cards/${id}`,
        }),
      }),
      getCards: builder.query<CardsResponse, { id: string; params: CardsParams }>({
        providesTags: ['Cards'],
        query: ({ id, params }) => ({
          method: 'GET',
          params: params ?? undefined,
          url: `/v1/decks/${id}/cards`,
        }),
      }),
      getCardsById: builder.query<CardsResponse, GetCardsArgs>({
        providesTags: ['Cards'],
        query: ({ id, params }) => ({
          body: params,
          method: 'GET',
          url: `/v1/cards/${id}`,
        }),
      }),
      getMinMaxCards: builder.query<Card, MinMaxCardType>({
        providesTags: ['Cards'],
        query: body => ({
          body,
          method: 'GET',
          url: `/v2/decks/min-max-cards`,
        }),
      }),
      getRandomCards: builder.query<CardsResponse, RandomCardType>({
        providesTags: ['Cards'],
        query: ({ id, previousCardId }) => ({
          method: 'GET',
          params: { previousCardId },
          url: `/v1/decks/${id}/learn`,
        }),
      }),
      updateCards: builder.mutation<Card, FormDataCards>({
        invalidatesTags: ['Cards'],
        query: ({ data, id }) => ({
          body: data,
          method: 'PATCH',
          url: `/v1/cards/${id}`,
        }),
      }),
      updateRatingCards: builder.mutation<CardsResponse, CardsSave>({
        invalidatesTags: ['Cards'],
        query: ({ cardsId, grade }) => ({
          body: grade,
          method: 'POST',
          url: `/v1/decks/${cardsId}/learn`,
        }),
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useDeleteCardsMutation,
  useGetCardsByIdQuery,
  useGetCardsQuery,
  useGetMinMaxCardsQuery,
  useGetRandomCardsQuery,
  useUpdateCardsMutation,
  useUpdateRatingCardsMutation,
} = cardsApi