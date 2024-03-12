import { useState } from 'react'

import { useDebounce } from '@/common/hooks'
import { Page } from '@/components/ui/page/page'
import { ColumnsType, Sort, Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { CreateControlBlock } from '@/features/decks/createControlBlock/createControlBlock'
import { DeckRow } from '@/features/decks/decksTable/deckRow'
import { FilterControlBlock } from '@/features/decks/filterControlBlock/filterControlBlock'
import { useMeQuery } from '@/pages/auth/api/auth-api'
import { useGetDecksMinMaxCardsQuery, useGetDecksQuery } from '@/pages/decks/api/decks-api'
import { Deck } from '@/pages/decks/api/decks-types'
import s from './decks.module.scss'

export const Decks = () => {
  const columnsDecks: ColumnsType[] = [
    { key: 'name', sortable: true, title: 'Name' },
    { key: 'cardsCount', sortable: true, title: 'Cards' },
    { key: 'updated', sortable: true, title: 'Last update' },
    { key: 'author.name', sortable: true, title: 'Created by' },
    { key: 'actions', sortable: false, title: '' },
  ]
  const listValues = [
    { disabled: false, text: 'My Cards', value: 'My Cards' },
    { disabled: false, text: 'All Cards', value: 'All Cards' },
  ]

  const cardsCount = useGetDecksMinMaxCardsQuery()
  const maxCardsCount = cardsCount.data ? cardsCount.data.max : 30

  const [sort, setSort] = useState<Sort>(null)
  const [searchName, setSearchName] = useState<string>('')
  const [tabSwitcherValue, setTabSwitcherValue] = useState<string>(listValues[1].value)
  const [sliderValue, setSliderValue] = useState<number[]>([0, maxCardsCount])

  const debouncedSearchName = useDebounce(searchName)
  const debouncedSliderValue = useDebounce(sliderValue)

  const { data } = useMeQuery()

  const decks = useGetDecksQuery({
    authorId: tabSwitcherValue === 'My Cards' ? data?.id : undefined,
    name: debouncedSearchName,
    orderBy: sort ? `${sort.key}-${sort.direction}` : 'null',
    maxCardsCount: debouncedSliderValue[1],
    minCardsCount: debouncedSliderValue[0],
  })

  const clearFilter = () => {
    setSliderValue([0, maxCardsCount])
    setSearchName('')
    setTabSwitcherValue(listValues[1].value)
  }

  if (decks.isLoading || cardsCount.isLoading) {
    return <>Loading....</>
  }

  if (decks.error) {
    return <>Error: {JSON.stringify(decks.error)}</>
  }

  return (
    <Page>
      <CreateControlBlock />
      <FilterControlBlock
        clearFilter={clearFilter}
        listValues={listValues}
        maxCardsCount={maxCardsCount}
        setSearchName={setSearchName}
        searchName={searchName}
        setSliderValue={setSliderValue}
        setTabSwitcherValue={setTabSwitcherValue}
        sliderValue={sliderValue}
        tabSwitcherValue={tabSwitcherValue}
      />
      {decks.data && decks.data.items.length > 0? (
        <Table columns={columnsDecks} onSort={setSort} sort={sort}>
          {decks.data.items.map((el: Deck) => (
            <DeckRow authUserId={data?.id} deck={el} key={el.id} />
          ))}
        </Table>
      ) : (
        <Typography className={s.typographyStyle} variant={'body1'}>No content with these terms...</Typography>
      )}
    </Page>
  )
}
