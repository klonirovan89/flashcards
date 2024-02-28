import { Card } from '@/features/cardsTable/cards'
import { Deck } from '@/features/decksTable/decks'

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type DecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type GetCardsArgs = {
  id: string
  params?: CardsParams
}

export type CardsParams = {
  answer?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: string
  question?: string
}

export type CardsResponse = {
  items: Card[]
  pagination: Pagination
}
