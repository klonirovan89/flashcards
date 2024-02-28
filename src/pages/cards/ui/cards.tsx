import { useState } from 'react'

import { ColumnsType, Sort, Table } from '@/components/ui/newTable'
import { Typography } from '@/components/ui/typography'
import { CardRow } from '@/features/cardsTable/cardRow'
import { useGetCardsQuery } from '@/pages/cards/api/cards.api'
import { Card } from '@/pages/cards/api/cards.type'

export const Cards = () => {
  const [sort, setSort] = useState<Sort>(null)

  const columnsCards: ColumnsType[] = [
    { key: 'question', sortable: true, title: 'Question' },
    { key: 'answer', sortable: true, title: 'Answer' },
    { key: 'updated', sortable: true, title: 'Last Updated' },
    { key: 'grade', sortable: true, title: 'Grade' },
    { key: 'controls', sortable: false, title: '' },
  ]

  const { data, error, isLoading } = useGetCardsQuery({
    id: 'clr6mynqv06srzk2vdkl52vl6',
    params: {
      orderBy: sort ? `${sort.key}-${sort.direction}` : 'null',
    },
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
        <Table columns={columnsCards} onSort={setSort} sort={sort}>
          {data.items.map((el: Card) => (
            <CardRow card={el} key={el.id} />
          ))}
        </Table>
      ) : (
        <Typography variant={'body1'}>No cards.</Typography>
      )}
    </div>
  )
}
