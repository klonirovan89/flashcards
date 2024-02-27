import { PropsWithChildren } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { TableComponents } from '@/components/ui/newTable/table-components'
import { Typography } from '@/components/ui/typography'

import s from './table.module.scss'

type PropsType = {
  columns: ColumnsType[]
  onSort?: (sort: Sort) => void
  sort?: Sort
} & PropsWithChildren

export type ColumnsType = {
  id: string
  label: string
  sortable: boolean
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export const Table = (props: PropsType) => {
  const { children, columns, onSort, sort } = props

  const handleSort = (column: ColumnsType) => {
    if (!onSort || !column.sortable) {
      return
    }

    if (sort && sort.key === column.id) {
      if (sort.direction === 'desc') {
        onSort(null)
      } else {
        onSort({
          direction: 'desc',
          key: column.id,
        })
      }
    } else {
      onSort({
        direction: 'asc',
        key: column.id,
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
                className={el.sortable ? s.headCellSortable : ''}
                key={el.id}
                onClick={() => handleSort(el)}
              >
                <div className={s.divHeadCell}>
                  <Typography className={s.typographyStyleHead} variant={'subtitle2'}>
                    {el.label}
                  </Typography>
                  {sort && sort.key === el.id ? (
                    <div className={`${s.arrow} ${sort.direction === 'desc' ? s.arrowDESC : ''}`}>
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
        <TableComponents.Body>{children}</TableComponents.Body>
      </TableComponents.Root>
    </div>
  )
}
