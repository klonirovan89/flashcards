import { useState } from 'react'

import { useDebounce } from '@/common/hooks'
import { InitLoader } from '@/components/ui/loader/initLoader'
import { Pagination } from '@/components/ui/newPagination'
import { ColumnsType, Sort, Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { CardRow } from '@/features/cards/cardsTable/cardRow'
import { FilterControlCards } from '@/features/cards/filterControlCards'
import { useGetCardsQuery } from '@/pages/cards/api/cards-api'
import { Card } from '@/pages/cards/api/cards-types'

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

  const debouncedSearchName = useDebounce(searchName)

  const { data, error, isLoading } = useGetCardsQuery({
    id: 'clr6mynqv06srzk2vdkl52vl6',
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
    <div>
      <FilterControlCards searchName={searchName} setSearchName={setSearchName} />
      {data && data.items.length > 0 ? (
        <div>
          <Table columns={columnsCards} onSort={setSort} sort={sort}>
            {data.items.map((el: Card) => (
              <CardRow card={el} key={el.id} />
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
  )
}
