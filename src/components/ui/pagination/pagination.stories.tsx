import type { Meta, StoryObj } from '@storybook/react'

import { PaginationControl } from '@/components/ui/pagination/pagination'

const meta = {
  component: PaginationControl,
  tags: ['autodocs'],
  title: 'Components/PaginationControl',
} satisfies Meta<typeof PaginationControl>

export default meta
type Story = StoryObj<typeof meta>

const values = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
  { name: "10" },
  { name: "11" },
  { name: "12" },
  { name: "13" },
  { name: "14" },
  { name: "15" },
  { name: "16" },
  { name: "17" },
  { name: "18" },
  { name: "19" },
  { name: "20" },
  { name: "21" },
  { name: "22" },
  { name: "23" },
  { name: "24" },
  { name: "25" },
  { name: "26" },
  { name: "27" },
  { name: "28" },
  { name: "29" },
  { name: "30" },
  { name: "31" },
  { name: "32" },
  { name: "33" },
  { name: "34" },
  { name: "35" },
  { name: "36" },
  { name: "37" },
  { name: "38" },
  { name: "39" },
  { name: "40" },
  { name: "41" },
  { name: "42" },
  { name: "43" },
  { name: "44" },
  { name: "45" },
  { name: "46" },
  { name: "47" },
  { name: "48" },
  { name: "49" },
  { name: "50" },
]

const listNumberValues = [
  { value: "1", label: "5" },
  { value: '2', label: '15' },
  { value: '3', label: '20' },
  { value: '4', label: '100' },
]

export const Default: Story = {
  args: {
    values: values,
    listNumberValues: listNumberValues,
  }
}
