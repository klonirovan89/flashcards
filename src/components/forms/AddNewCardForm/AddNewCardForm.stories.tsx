import type { Meta, StoryObj } from '@storybook/react'

import { AddNewCardForm } from './'

const meta = {
  argTypes: {},
  component: AddNewCardForm,
  tags: ['autodocs'],
  title: 'Components/AddNewCardForm',
} satisfies Meta<typeof AddNewCardForm>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithValue: Story = {
  args: {},
}
