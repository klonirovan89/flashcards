import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from '@/components/ui/spinner/loader'

const meta = {
  component: Loader,
  tags: ['autodocs'],
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: Loader,
}
