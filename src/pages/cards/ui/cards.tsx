import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useDebounce } from '@/common/hooks/useDebounce/useDebounce'
import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { DropDownMenu } from '@/components/ui/drop-down/dropDownMenu'
import { InitLoader } from '@/components/ui/loader/initLoader'
import { Pagination } from '@/components/ui/newPagination'
import { Page } from '@/components/ui/page/page'
import { ColumnsType, Sort, Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { CardRow } from '@/features/cards/cardsTable/cardRow'
import { CreateCards } from '@/features/cards/createCards'
import { FilterCards } from '@/features/cards/filterCards/filterCards'
import { DeleteDecks } from '@/features/decks/deleteDecks'
import { EditDecks } from '@/features/decks/editDecks'
import { useMeQuery } from '@/pages/auth/api/auth-api'
import { useGetCardsQuery } from '@/pages/cards/api/cards-api'
import { Card } from '@/pages/cards/api/cards-types'
import { useGetDeckByIdQuery } from '@/pages/decks/api/decks-api'

import s from './cards.module.scss'

export const Cards = () => {
  const [sort, setSort] = useState<Sort>(null)
  const [searchName, setSearchName] = useState<string>('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const columnsCards: ColumnsType[] = [
    { key: 'question', sortable: true, title: 'Question' },
    { key: 'answer', sortable: true, title: 'Answer' },
    { key: 'updated', sortable: true, title: 'Last Updated' },
    { key: 'grade', sortable: true, title: 'Grade' },
    { key: 'controls', sortable: false, title: '' },
  ]

  const debouncedSearchName = useDebounce(searchName)

  const { id } = useParams()

  const deck = useGetDeckByIdQuery({ id: id || '' })

  const meData = useMeQuery()

  const navigate = useNavigate()

  const { data, error, isLoading } = useGetCardsQuery({
    id: id || '',
    params: {
      currentPage: page,
      itemsPerPage: pageSize,
      orderBy: sort ? `${sort.key}-${sort.direction}` : 'null',
      question: debouncedSearchName,
    },
  })

  const isMyDeck = meData.data?.id === deck.data?.userId

  const isEmptyDeck = data?.items.length === 0

  const columns = columnsCards.filter(column => (isMyDeck ? column : column.key !== 'controls'))

  if (isLoading) {
    return <InitLoader />
  }
  if (error) {
    return <>Error: {JSON.stringify(error)}</>
  }

  const options = [
    {
      disabled: isEmptyDeck,
      handler: () => navigate(`/decks/${deck.data?.id}/learn`),
      id: 'Learn',
      label: 'Learn',
    },
    { disabled: false, handler: () => setOpenEditModal(true), id: 'Edit', label: 'Edit' },
    { disabled: false, handler: () => setOpenDeleteModal(true), id: 'Delete', label: 'Delete' },
  ]

  return (
    <Page>
      <div className={s.wrapper}>
        <BackButton />
        <div className={s.container}>
          <div className={s.box}>
            <div className={s.typographyWhitMenu}>
              <Typography variant={'h1'}>{deck.data?.name}</Typography>
              {isMyDeck && <DropDownMenu options={options} />}
              {deck.data && (
                <>
                  <EditDecks
                    changeModalState={() => setOpenEditModal(!openEditModal)}
                    deck={deck.data}
                    open={openEditModal}
                  />
                  <DeleteDecks
                    changeModalState={() => setOpenDeleteModal(!openDeleteModal)}
                    deckId={deck.data.id}
                    deckName={deck.data.name}
                    open={openDeleteModal}
                  />
                </>
              )}
            </div>
            {isMyDeck ? (
              <CreateCards deckId={deck.data?.id || ''} />
            ) : (
              deck.data &&
              deck.data?.cardsCount > 0 && (
                <Button
                  onClick={() => navigate(`/decks/${deck.data?.id}/learn`)}
                  variant={'primary'}
                >
                  <Typography variant={'subtitle2'}>Learn Cards</Typography>
                </Button>
              )
            )}
          </div>
          {deck.data?.cover && (
            <img
              alt={'No photo'}
              className={s.img}
              height={107}
              src={deck.data?.cover}
              width={170}
            />
          )}
          <FilterCards searchName={searchName} setSearchName={setSearchName} />
        </div>
        {data && data.items.length > 0 ? (
          <div>
            <Table columns={columns} onSort={setSort} sort={sort}>
              {data.items.map((el: Card) => (
                <CardRow card={el} deckId={deck.data?.id || ''} isMyDeck={isMyDeck} key={el.id} />
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
