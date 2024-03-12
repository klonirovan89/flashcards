import { Select } from '@/components/ui/select'

type Props = {
  pageSize: number
  pageSizeChange: (newPageSize: number) => void
}
export const SelectPagination = ({ pageSize, pageSizeChange }: Props) => {
  const options = [
    { label: '5', value: '5' },
    { label: '7', value: '7' },
    { label: '10', value: '10' },
    { label: '15', value: '15' },
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
