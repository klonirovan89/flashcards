import {
  CreateDecksArgs,
  Deck,
  DecksArgs,
  DecksResponse,
  MinMaxCards,
  // UpdateDecksArgs,
} from '@/pages/decks/api/decks-types'
import { baseApi } from '@/services/base-api'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDecks: builder.mutation<Deck, CreateDecksArgs>({
        invalidatesTags: ['Decks'],
        query: body => {
          return {
            body: generateFormData(body),
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
      getDeckById: builder.query<Deck, { id: string }>({
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
      updateDecks: builder.mutation<Deck, { data: CreateDecksArgs; id: string }>({
        invalidatesTags: ['Decks'],
        // async onQueryStarted({ id, ...patch }, { dispatch, getState, queryFulfilled }) {
        //   const decksArr = decksApi.util.selectInvalidatedBy(getState(), ['Decks'])
        //   //TODO: fix any
        //   let patchResult: any
        //
        //   decksArr.forEach(({ originalArgs }) => {
        //     patchResult = dispatch(
        //       decksApi.util.updateQueryData('getDecks', originalArgs, draft => {
        //         const deck = draft.items.find(deck => deck.id === id)
        //
        //         if (deck) {
        //           Object.assign(draft, patch)
        //         }
        //       })
        //     )
        //   })
        //
        //   try {
        //     await queryFulfilled
        //   } catch {
        //     patchResult.undo()
        //   }
        // },
        query: ({ data, id }) => {
          return {
            body: generateFormData(data),
            method: 'PATCH',
            url: `/v1/decks/${id}`,
          }
        },
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

const generateFormData = (data: CreateDecksArgs) => {
  const formData = new FormData()

  if (data.sendCover) {
    formData.append('cover', data.cover || '')
  }
  formData.append('name', data.name)
  formData.append('isPrivate', String(data.isPrivate))

  return formData
}
