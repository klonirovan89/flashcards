import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/text-field/text-field'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

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
