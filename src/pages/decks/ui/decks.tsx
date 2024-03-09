import { useState } from 'react'

import { Page } from '@/components/ui/page/page'
import { ColumnsType, Sort, Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { AddDeck } from '@/features/decks/addDeck/addDeck'
import { DeckRow } from '@/features/decks/decksTable/deckRow'
import { useMeQuery } from '@/pages/auth/api/auth-api'
import { useGetDecksQuery } from '@/pages/decks/api/decks-api'
import { Deck } from '@/pages/decks/api/decks-types'

export const Decks = () => {
  const [sort, setSort] = useState<Sort>(null)

  const [open, setOpen] = useState<boolean>(false)

  const columnsDecks: ColumnsType[] = [
    { key: 'name', sortable: true, title: 'Name' },
    { key: 'cardsCount', sortable: true, title: 'Cards' },
    { key: 'updated', sortable: true, title: 'Last update' },
    { key: 'author.name', sortable: true, title: 'Created by' },
    { key: 'actions', sortable: false, title: '' },
  ]

  const decks = useGetDecksQuery({
    orderBy: sort ? `${sort.key}-${sort.direction}` : 'null',
  })

  const { data } = useMeQuery()

  const closeModalWindow = () => {
    changeModalState()
  }

  const changeModalState = () => {
    setOpen(!open)
  }

  if (decks.isLoading) {
    return <>Loading....</>
  }
  if (decks.error) {
    return <>Error: {JSON.stringify(decks.error)}</>
  }

  return (
    <Page>
      <AddDeck
        changeModalState={changeModalState}
        closeModalWindow={closeModalWindow}
        open={open}
        text={'Add New Deck'}
        title={'Add New Deck'}
        withTrigger
      />
      {decks.data ? (
        <Table columns={columnsDecks} onSort={setSort} sort={sort}>
          {decks.data.items.map((el: Deck) => (
            <DeckRow authUserId={data?.id} deck={el} key={el.id} />
          ))}
        </Table>
      ) : (
        <Typography variant={'body1'}>No cards.</Typography>
      )}
    </Page>
  )
}
