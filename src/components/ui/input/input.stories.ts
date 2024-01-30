import type { Meta, StoryObj } from '@storybook/react'

import { SuperInput } from './'

const meta = {
  component: SuperInput,
  tags: ['autodocs'],
  title: 'Components/SuperInput',
} satisfies Meta<typeof SuperInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Input',
    label: 'Input',
    type: 'default'
  },
}

export const Password: Story = {
  args: {
    placeholder: 'Input',
    label: 'Input',
    type: 'password'
  },
}

export const Search: Story = {
  args: {
    placeholder: 'Input',
    label: 'Input',
    type: 'search'
  },
}
