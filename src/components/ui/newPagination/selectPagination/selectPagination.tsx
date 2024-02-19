import { Select } from '@/components/ui/select'

type Props = {
  pageSize: number
  pageSizeChange: (newPageSize: number) => void
}
export const SelectPagination = ({ pageSize, pageSizeChange }: Props) => {
  const options = [
    { label: '10', value: '10' },
    { label: '20', value: '20' },
    { label: '30', value: '30' },
    { label: '50', value: '50' },
    { label: '100', value: '100' },
  ]

  const onValueChange = (value: string) => {
    pageSizeChange(+value)
  }

  return (
    <Select
      handleSelectChange={onValueChange}
      isPagination
      options={options}
      selectedValue={pageSize.toString()}
      value={pageSize.toString()}
    />
  )
}
