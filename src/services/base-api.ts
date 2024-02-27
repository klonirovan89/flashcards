import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Pagination = {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
}

export type GetDecksArgs = {
    orderBy?: string
    minCardsCount?: number
    maxCardsCount?: number
    name?: string
    authorId?: string
    currentPage?: number
    itemsPerPage?: number
}
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.flashcards.andrii.es',
        credentials: 'include',
        prepareHeaders: headers => {
            headers.append('x-auth-skip', 'true')
        },
    }),
    endpoints: builder => {
        return {
            getDecks: builder.query<any, GetDecksArgs | void>({
                query: (args) => ({
                    url: `v1/decks`,
                    params: args ? args : undefined
                }),
            }),
        }
    },
})

export const { useGetDecksQuery } = baseApi