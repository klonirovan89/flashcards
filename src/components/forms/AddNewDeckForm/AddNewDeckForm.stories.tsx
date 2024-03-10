import type { Meta, StoryObj } from '@storybook/react'

import { DeckForm } from '.'

const meta = {
  argTypes: {},
  component: DeckForm,
  tags: ['autodocs'],
  title: 'Components/Forms/AddNewDeckForm',
} satisfies Meta<typeof DeckForm>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithValue: Story = {
  args: {
    text: 'Add new Deck',
  },
}
