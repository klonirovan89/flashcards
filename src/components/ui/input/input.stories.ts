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
    label: 'Input',
    placeholder: 'Input',
    type: 'default',
  },
}

export const Password: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    type: 'search',
  },
}
