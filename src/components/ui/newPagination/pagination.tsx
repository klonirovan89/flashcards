import { memo } from 'react'

import { DOTS, usePagination } from '@/components/ui/newPagination/hook/usePagination'
import { SelectPagination } from '@/components/ui/newPagination/selectPagination/selectPagination'

import s from './pagination.module.scss'

type Props = {
  className?: string
  currentPage: number
  pageChange: (pageNumber: number) => void
  pageSize: number
  pageSizeChange: (newPageSize: number) => void
  siblingCount?: number
  totalCount: number
}

export const Pagination = memo((props: Props) => {
  const {
    currentPage,
    pageChange,
    pageSize,
    pageSizeChange,
    siblingCount = 1,
    totalCount = 10,
  } = props

  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    return (
      <div className={s.paginationContainer}>
        Показать
        <SelectPagination pageSize={pageSize} pageSizeChange={pageSizeChange} /> на странице
      </div>
    )
  }

  const onPrevious = () => {
    pageChange(currentPage - 1)
  }

  const onNext = () => {
    pageChange(currentPage + 1)
  }

  return (
    <div className={s.paginationContainer}>
      <button className={s.button} disabled={currentPage === 1} onClick={onPrevious}>
        {'❮'}
      </button>
      {paginationRange.map((pageNumber, index) => {
        if (typeof pageNumber !== 'number') {
          return (
            <span className={s.dots} key={index}>
              {DOTS}
            </span>
          )
        }
        const buttonClass = (pageNumber: number) => {
          return pageNumber === currentPage ? s.active : ''
        }

        return (
          <button
            className={`${s.button} ${buttonClass(pageNumber)}`}
            key={index}
            onClick={() => pageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        )
      })}
      <button
        className={s.button}
        disabled={currentPage === paginationRange[paginationRange.length - 1]}
        onClick={onNext}
      >
        {'❯'}
      </button>
      Показать
      <SelectPagination pageSize={pageSize} pageSizeChange={pageSizeChange} /> на странице
    </div>
  )
})
