import {Sort, Table} from '@/components/ui/newTable'
import {useGetDecksQuery} from '@/services/base-api'
import {useState} from "react";

export const Decks = () => {
  const [sort, setSort] = useState<Sort>(null)

  const columnsDecks: ColumnsType[] = [
    { id: 'name', label: 'Name', sortable: true},
    { id: 'cardsCount', label: 'Cards', sortable: true },
    { id: 'updated', label: 'Last update', sortable: true },
    { id: 'author.name', label: 'Created by', sortable: true },
    { id: 'actions', label: '', sortable: false },
  ]

  const { isLoading, data, error } = useGetDecksQuery({
    orderBy: sort ? `${sort.key}-${sort.direction}` : 'null'
  })

  if (isLoading) {
    return <>Loading....</>
  }
  if (error) {
    return <>Error: {JSON.stringify(error)}</>
  }

  return (
    <div>
      <Table columns={columnsDecks} data={data} sort={sort} onSort={setSort}/>
    </div>
  )
}

export type ColumnsType = {
  id: string
  label: string
  sortable: boolean
}
