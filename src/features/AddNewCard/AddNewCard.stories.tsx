import type { Meta, StoryObj } from '@storybook/react'

import { AddNewCard } from '.'

const meta = {
  argTypes: {},
  component: AddNewCard,
  tags: ['autodocs'],
  title: 'Features/AddNewCard',
} satisfies Meta<typeof AddNewCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
