import { useState } from 'react'

import { ColumnsType, Sort, Table } from '@/components/ui/newTable'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/base-api'

import { DeckRow } from './deckRow'

export const Decks = () => {
  const [sort, setSort] = useState<Sort>(null)

  const columnsDecks: ColumnsType[] = [
    { key: 'name', sortable: true, title: 'Name' },
    { key: 'cardsCount', sortable: true, title: 'Cards' },
    { key: 'updated', sortable: true, title: 'Last update' },
    { key: 'author.name', sortable: true, title: 'Created by' },
    { key: 'actions', sortable: false, title: '' },
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
      {data ? (
        <Table columns={columnsDecks} onSort={setSort} sort={sort}>
          {data.items.map((el: Deck) => (
            <DeckRow deck={el} key={el.id} />
          ))}
        </Table>
      ) : (
        <Typography variant={'body1'}>No cards.</Typography>
      )}
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
