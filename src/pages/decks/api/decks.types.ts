export type DecksResponse = {
  items: Decks[]
  maxCardsCount: number
  pagination: Pagination
}
export type Author = {
  id: string
  name: string
}
export type Decks = {
  author: Author
  cardsCount: number
  cover: null | string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
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
  isPrivate?: boolean
  name: string
}
