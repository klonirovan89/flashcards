import { Pagination } from '@/pages/decks/api/decks-types'

export type Card = {
  answer: string
  answerImg: null | string
  answerVideo: null | string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: null | string
  questionVideo: null | string
  shots: number
  updated: string
  userId: string
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
} | void

export type CardsResponse = {
  items: Card[]
  pagination: Pagination
}
export type CardsSave = {
  cardsId: string
  grade: number
}

export type FormDataCards = {
  data: FormData
  id: string
}

export type RandomCardType = {
  id: string
  previousCardId: string
}

export type MinMaxCardType = {
  max: number
  min: number
}
