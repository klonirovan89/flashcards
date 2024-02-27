import { useState } from 'react'

import { ColumnsType, Sort, Table } from '@/components/ui/newTable'
import { useGetDecksQuery } from '@/services/base-api'

import { DeckRow } from './deckRow'

export const Decks = () => {
  const [sort, setSort] = useState<Sort>(null)

  const columnsDecks: ColumnsType[] = [
    { id: 'name', label: 'Name', sortable: true },
    { id: 'cardsCount', label: 'Cards', sortable: true },
    { id: 'updated', label: 'Last update', sortable: true },
    { id: 'author.name', label: 'Created by', sortable: true },
    { id: 'actions', label: '', sortable: false },
  ]

  const { data, error, isLoading } = useGetDecksQuery({
    orderBy: sort ? `${sort.key}-${sort.direction}` : 'null',
  })

  if (isLoading) {
    return <>Loading....</>
  }
  if (error) {
    return <>Error: {JSON.stringify(error)}</>
  }

  return (
    <div>
      <Table columns={columnsDecks} onSort={setSort} sort={sort}>
        {data.items.map((el: Deck) => (
          <DeckRow deck={el} key={el.id} />
        ))}
      </Table>
    </div>
  )
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
