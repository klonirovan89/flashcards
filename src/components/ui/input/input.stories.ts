import type { Meta, StoryObj } from '@storybook/react'

import { InputControl } from './'

const meta = {
  component: InputControl,
  tags: ['autodocs'],
  title: 'Components/InputControl',
} satisfies Meta<typeof InputControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Input',
    title: 'Input',
    type: 'default'
  },
}

export const Password: Story = {
  args: {
    placeholder: 'Input',
    title: 'Input',
    type: 'password'
  },
}

export const Search: Story = {
  args: {
    placeholder: 'Input',
    title: 'Input',
    type: 'search'
  },
}
