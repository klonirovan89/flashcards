import type { Meta, StoryObj } from '@storybook/react'

import { AddNewDeckForm } from '.'

const meta = {
  argTypes: {},
  component: AddNewDeckForm,
  tags: ['autodocs'],
  title: 'Components/AddNewDeckForm',
} satisfies Meta<typeof AddNewDeckForm>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithValue: Story = {
  args: {},
}
