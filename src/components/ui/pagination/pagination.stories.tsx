import type { Meta, StoryObj } from '@storybook/react'

import { PaginationControl } from '@/components/ui/pagination/pagination'

const meta = {
  component: PaginationControl,
  tags: ['autodocs'],
  title: 'Components/PaginationControl',
} satisfies Meta<typeof PaginationControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
