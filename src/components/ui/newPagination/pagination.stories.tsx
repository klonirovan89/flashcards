import { useState } from 'react'

import { Pagination } from '@/components/ui/newPagination/pagination'
import { Meta } from '@storybook/react'

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta<typeof Pagination>

export const Default = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  return (
    <div style={{ margin: '30px 30px' }}>
      <Pagination
        currentPage={page}
        pageChange={setPage}
        pageSize={pageSize}
        pageSizeChange={setPageSize}
        totalCount={100}
      />
    </div>
  )
}
