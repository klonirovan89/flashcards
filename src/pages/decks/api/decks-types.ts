export type DecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type Deck = {
  author: DeckUser
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type DeckUser = {
  id: string
  name: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type DecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: null | string
}

export type CreateDecksArgs = {
  cover?: File | null
  isPrivate?: boolean
  name: string
  sendCover: boolean
}

export type MinMaxCards = {
  max: number
  min: number
}

export type UpdateDecksArgs = Partial<CreateDecksArgs> & { id: Deck['id'] }
