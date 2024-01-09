import type { Meta, StoryObj } from '@storybook/react'

import { InputControl } from './'

const meta = {
  component: InputControl,
  tags: ['autodocs'],
  title: 'Components/InputControl',
} satisfies Meta<typeof InputControl>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    placeholder: 'Input',
    title: 'Input',
    variant: 'input',
  },
}
