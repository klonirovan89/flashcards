import type { Meta, StoryObj } from '@storybook/react'

import { AddNewCard } from './index'

const meta = {
  argTypes: {},
  component: AddNewCard,
  tags: ['autodocs'],
  title: 'Features/addNewCard',
} satisfies Meta<typeof AddNewCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    deckId: '',
    open: true,
    withTrigger: true,
  },
}
