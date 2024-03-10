import type { Meta, StoryObj } from '@storybook/react'

import { AddNewDeck } from './index'

const meta = {
  argTypes: {},
  component: AddNewDeck,
  tags: ['autodocs'],
  title: 'Features/AddNewDeck',
} satisfies Meta<typeof AddNewDeck>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    open: false,
    text: 'Add New Deck',
    title: 'Add New Deck',
    withTrigger: true,
  },
}
