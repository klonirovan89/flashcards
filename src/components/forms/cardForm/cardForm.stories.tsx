import type { Meta, StoryObj } from '@storybook/react'

import { CardForm } from './'

const meta = {
  argTypes: {},
  component: CardForm,
  tags: ['autodocs'],
  title: 'Components/Forms/CardForm',
} satisfies Meta<typeof CardForm>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithValue: Story = {
  args: {
    deckId: '',
    text: '',
  },
}
