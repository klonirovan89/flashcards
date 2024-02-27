import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/base-api'

import s from './table.module.scss'

type ColumnsType = {
  id: string
  label: string
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

type DeckUser = {
  id: string
  name: string
}

export const TableComponents = () => {
  const columns: ColumnsType[] = [
    { id: 'name', label: 'Name' },
    { id: 'cardsCount', label: 'Cards' },
    { id: 'update', label: 'Last update' },
    { id: 'author.name', label: 'Crated by' },
  ]

  const { data } = useGetDecksQuery()

  const [currentColumnId, setCurrentColumnId] = useState<null | string>(null)
  const [currentSortDirection, setCurrentSortDirection] = useState<null | string>(null)
  const [dataList, setDataList] = useState<Deck[]>(data.items)

  const handleColumnSort = (columnId: string) => {
    let sortDirection = currentSortDirection

    if (currentColumnId !== columnId) {
      setCurrentColumnId(columnId)
      sortDirection = null
    }

    const nextSortDirection = getNextSortDirection(sortDirection)

    setCurrentSortDirection(nextSortDirection)

    sortDataByColumn(columnId, nextSortDirection)
  }

  const getNextSortDirection = (currentSortDirection: null | string) => {
    switch (currentSortDirection) {
      case null:
        return 'asc'
      case 'asc':
        return 'desc'
      default:
        return null
    }
  }

  const sortDataByColumn = (columnId: string, nextSortDirection: null | string) => {
    if (nextSortDirection === 'asc') {
      const newData = [...dataList].sort((a, b) =>
        a[columnId as keyof typeof a] > b[columnId as keyof typeof a] ? 1 : -1
      )

      setDataList(newData)
    } else if (nextSortDirection === 'desc') {
      const newData = [...dataList].sort((a, b) =>
        b[columnId as keyof typeof a] > a[columnId as keyof typeof a] ? 1 : -1
      )

      setDataList(newData)
    } else {
      setDataList(data.items)
    }
  }

  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          {columns.map(el => (
            <Table.HeadCell
              key={el.id}
              onClick={() => {
                handleColumnSort(el.id)
              }}
            >
              <div className={s.divHeadCell}>
                <Typography className={s.typographyStyleHead} variant={'subtitle2'}>
                  {el.label}
                </Typography>
                {currentSortDirection !== null && currentColumnId === el.id ? (
                  <div
                    className={`${s.arrow} ${currentSortDirection === 'desc' ? s.arrowDESC : ''}`}
                  >
                    <Icon height={'24px'} iconId={'Arrow'} width={'24px'} />
                  </div>
                ) : (
                  <div className={s.divArrow}></div>
                )}
              </div>
            </Table.HeadCell>
          ))}
          <Table.HeadCell className={s.headCellControl}>
            <div className={s.divHeadCellControl}>
              <Typography className={s.typographyStyleHeadControl} variant={'subtitle2'}>
                Control
              </Typography>
            </div>
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {dataList.map(el => (
          <Table.Row key={el.id}>
            <Table.Cell>
              <div className={s.divNameBody}>
                <Typography className={s.typographyStyleBody} variant={'body2'}>
                  {el.name}
                </Typography>
              </div>
            </Table.Cell>
            <Table.Cell>
              <Typography className={s.typographyStyleBody} variant={'body2'}>
                {el.cardsCount}
              </Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography className={s.typographyStyleBody} variant={'body2'}>
                {new Date(el.updated).toLocaleDateString('ru-RU')}
              </Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography className={s.typographyStyleBody} variant={'body2'}>
                {el.author.name}
              </Typography>
            </Table.Cell>
            <Table.Cell>
              <div className={s.control}>
                <Button onClick={() => alert('play')} variant={'pure'}>
                  <Icon height={'16px'} iconId={'Learn'} width={'16px'} />
                </Button>
                <Button onClick={() => alert('play')} variant={'pure'}>
                  <Icon height={'16px'} iconId={'Edit'} width={'16px'} />
                </Button>
                <Button onClick={() => alert('play')} variant={'pure'}>
                  <Icon height={'16px'} iconId={'Delete'} width={'16px'} />
                </Button>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

const Root = ({ ...rest }) => {
  return <table className={s.root} {...rest} />
}

const Head = ({ ...rest }) => {
  return <thead className={s.head} {...rest} />
}

const HeadCell = ({ ...rest }) => {
  return <th className={s.headCell} {...rest} />
}

const Body = ({ ...rest }) => {
  return <tbody className={s.body} {...rest} />
}

const Row = ({ ...rest }) => {
  return <tr className={s.row} {...rest} />
}

const Cell = ({ ...rest }) => {
  return <td className={s.cell} {...rest} />
}

const Empty = ({ ...rest }) => {
  return <div className={s.empty} {...rest} />
}

export const Table = { Body, Cell, Empty, Head, HeadCell, Root, Row }
