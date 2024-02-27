import s from './table.module.scss'
import { Typography } from '@/components/ui/typography'
import { Icon } from '@/components/ui/icon/Icon'
import { Button } from '@/components/ui/button'
import { ColumnsType } from '@/decks'
import { Pagination } from '@/services/base-api'
import { TableComponents } from '@/components/ui/newTable/table-components'
import NoPhoto from '@/assets/icons/NoPhoto.png'

export type DeckResponse = {
  items: Deck[]
  pagination: Pagination
}

export type Deck = {
  author: DeckUser
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type DeckUser = {
  id: string
  name: string
}

type PropsType = {
  columns: ColumnsType[]
  data: DeckResponse
  sort?: Sort
  onSort?: (sort: Sort) => void
}

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const Table = (props: PropsType) => {
  const { columns, data, sort, onSort } = props

  const handleSort = (column: ColumnsType) => {
    if (!onSort || !column.sortable) {
      return
    }

    if (sort && sort.key === column.id) {
      if (sort.direction === 'desc') {
        onSort(null)
      } else {
        onSort({
          key: column.id,
          direction: 'desc',
        })
      }

    } else {
      onSort({
        key: column.id,
        direction: 'asc',
      })
    }
  }

  return (
    <div className={s.container}>
      <TableComponents.Root>
        <TableComponents.Head>
          <TableComponents.Row>
            {columns.map(el => (
              <TableComponents.HeadCell
                key={el.id}
                onClick={() => handleSort(el)}
                className={el.sortable ? s.headCellSortable : ''}
              >
                <div className={s.divHeadCell}>
                  <Typography className={s.typographyStyleHead} variant={'subtitle2'}>
                    {el.label}
                  </Typography>
                  {sort && sort.key === el.id ? (
                      <div
                      className={`${s.arrow} ${sort.direction === 'desc' ? s.arrowDESC : ''}`}
                    >
                      <Icon height={'24px'} iconId={'Arrow'} width={'24px'} />
                    </div>
                  ) : (
                    <div className={s.divArrow}></div>
                  )}
                </div>
              </TableComponents.HeadCell>
            ))}

          </TableComponents.Row>
        </TableComponents.Head>
        <TableComponents.Body>
          {data.items.map(el => (
            <TableComponents.Row key={el.id}>
              <TableComponents.Cell>
                <Button onClick={() => alert('Здесь должен быть роут колоды')} variant={'pure'}>
                  <div className={s.divNameBody}>
                    {el.cover ? (
                      <img src={el.cover} width={70} height={50} alt={'img'} />
                    ) : (
                      <div className={s.img}>
                        <img
                          src={NoPhoto}
                          width={50}
                          height={50}
                          alt={'img'}
                        />
                      </div>
                    )}
                    <Typography className={s.typographyStyleBody} variant={'body2'}>
                      {el.name}
                    </Typography>
                  </div>
                </Button>
              </TableComponents.Cell>
              <TableComponents.Cell>
                <Typography className={s.typographyStyleBody} variant={'body2'}>
                  {el.cardsCount}
                </Typography>
              </TableComponents.Cell>
              <TableComponents.Cell>
                <Typography className={s.typographyStyleBody} variant={'body2'}>
                  {new Date(el.updated).toLocaleDateString('ru-RU')}
                </Typography>
              </TableComponents.Cell>
              <TableComponents.Cell>
                <Typography className={s.typographyStyleBody} variant={'body2'}>
                  {el.author.name}
                </Typography>
              </TableComponents.Cell>
              <TableComponents.Cell>
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
              </TableComponents.Cell>
            </TableComponents.Row>
          ))}
        </TableComponents.Body>
      </TableComponents.Root>
    </div>
  )
}
