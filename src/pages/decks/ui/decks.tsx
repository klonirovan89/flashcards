import { useState } from 'react'

import { useDebounce } from '@/common/hooks'
import { InitLoader } from '@/components/ui/loader/initLoader'
import { Pagination } from '@/components/ui/newPagination'
import { Page } from '@/components/ui/page/page'
import { ColumnsType, Sort, Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { CreateControlDecks } from '@/features/decks/createControlDecks/createControlDecks'
import { DeckRow } from '@/features/decks/decksTable/deckRow'
import { FilterControlDecks } from '@/features/decks/filterControlDecks/filterControlDecks'
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
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const debouncedSearchName = useDebounce(searchName)
  const debouncedSliderValue = useDebounce(sliderValue)

  const { data } = useMeQuery()

  const decks = useGetDecksQuery({
    authorId: tabSwitcherValue === 'My Cards' ? data?.id : undefined,
    currentPage: page,
    itemsPerPage: pageSize,
    maxCardsCount: debouncedSliderValue[1],
    minCardsCount: debouncedSliderValue[0],
    name: debouncedSearchName,
    orderBy: sort ? `${sort.key}-${sort.direction}` : 'null',
  })

  if (decks.isLoading || cardsCount.isLoading) {
    return <InitLoader />
  }

  if (decks.error) {
    return <>Error: {JSON.stringify(decks.error)}</>
  }

  return (
    <Page>
      <CreateControlDecks />
      <FilterControlDecks
        listValues={listValues}
        maxCardsCount={maxCardsCount}
        searchName={searchName}
        setSearchName={setSearchName}
        setSliderValue={setSliderValue}
        setTabSwitcherValue={setTabSwitcherValue}
        sliderValue={sliderValue}
        tabSwitcherValue={tabSwitcherValue}
      />
      {decks.data && decks.data.items.length > 0 ? (
        <div>
          <Table columns={columnsDecks} onSort={setSort} sort={sort}>
            {decks.data.items.map((el: Deck) => (
              <DeckRow authUserId={data?.id} deck={el} key={el.id} />
            ))}
          </Table>
          <Pagination
            className={s.pagination}
            currentPage={decks.data.pagination.currentPage}
            pageChange={setPage}
            pageSize={decks.data.pagination.itemsPerPage}
            pageSizeChange={setPageSize}
            totalCount={decks.data.pagination.totalItems}
          />
        </div>
      ) : (
        <Typography className={s.typographyStyle} variant={'body1'}>
          No content with these terms...
        </Typography>
      )}
    </Page>
  )
}
