import { useState } from 'react'

import { useDebounce } from '@/common/hooks'
import { BackButton } from '@/components/ui/back-button'
import { DropDownMenu } from '@/components/ui/drop-down/dropDownMenu'
import { InitLoader } from '@/components/ui/loader/initLoader'
import { Pagination } from '@/components/ui/newPagination'
import { Page } from '@/components/ui/page/page'
import { ColumnsType, Sort, Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { CardRow } from '@/features/cards/cardsTable/cardRow'
import { CreateCards } from '@/features/cards/createCards'
import { FilterCards } from '@/features/cards/filterCards/filterCards'
import { useGetCardsQuery } from '@/pages/cards/api/cards-api'
import { Card } from '@/pages/cards/api/cards-types'
import { useGetDeckByIdQuery } from '@/pages/decks/api/decks-api'

import s from './cards.module.scss'

export const Cards = () => {
  const [sort, setSort] = useState<Sort>(null)
  const [searchName, setSearchName] = useState<string>('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const columnsCards: ColumnsType[] = [
    { key: 'question', sortable: true, title: 'Question' },
    { key: 'answer', sortable: true, title: 'Answer' },
    { key: 'updated', sortable: true, title: 'Last Updated' },
    { key: 'grade', sortable: true, title: 'Grade' },
    { key: 'controls', sortable: false, title: '' },
  ]

  const valueDropDownMenu = [
    { id: 'Learn', label: 'Learn' },
    { id: 'Edit', label: 'Edit' },
    { id: 'Delete', label: 'Delete' },
  ]

  const debouncedSearchName = useDebounce(searchName)

  const deck = useGetDeckByIdQuery({ id: 'cltquy4on0067th2gbh90jhm5' })

  const { data, error, isLoading } = useGetCardsQuery({
    id: 'cltquy4on0067th2gbh90jhm5',
    params: {
      currentPage: page,
      itemsPerPage: pageSize,
      orderBy: sort ? `${sort.key}-${sort.direction}` : 'null',
      question: debouncedSearchName,
    },
  })

  if (isLoading) {
    return <InitLoader />
  }
  if (error) {
    return <>Error: {JSON.stringify(error)}</>
  }

  return (
    <Page>
      <div className={s.wrapper}>
        <BackButton />
        <div className={s.container}>
          <div className={s.box}>
            <div className={s.typographyWhitMenu}>
              <Typography variant={'h1'}>{deck.data?.name}</Typography>
              <DropDownMenu value={valueDropDownMenu}/>
            </div>
            <CreateCards/>
          </div>
          {deck.data?.cover && (
              <img alt={'No photo'} className={s.img} height={107} src={deck.data?.cover} width={170}/>
          )}
          <FilterCards searchName={searchName} setSearchName={setSearchName}/>
        </div>
        {data && data.items.length > 0 ? (
            <div>
              <Table columns={columnsCards} onSort={setSort} sort={sort}>
                {data.items.map((el: Card) => (
                    <CardRow card={el} key={el.id}/>
                ))}
              </Table>
              <Pagination
                  className={s.pagination}
                  currentPage={data.pagination.currentPage}
                  pageChange={setPage}
                  pageSize={data.pagination.itemsPerPage}
              pageSizeChange={setPageSize}
              totalCount={data.pagination.totalItems}
            />
          </div>
        ) : (
          <Typography className={s.typographyStyle} variant={'body1'}>
            No content with these terms...
          </Typography>
        )}
      </div>
    </Page>
  )
}
