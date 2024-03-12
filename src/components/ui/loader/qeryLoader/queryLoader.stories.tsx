import type { Meta, StoryObj } from '@storybook/react'

import { QueryLoader } from '@/components/ui/loader/qeryLoader/queryLoader'

const meta = {
  component: QueryLoader,
  tags: ['autodocs'],
  title: 'Components/QueryLoader',
} satisfies Meta<typeof QueryLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: QueryLoader,
}
