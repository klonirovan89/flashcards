import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxControl } from './'

const meta = {
  component: CheckboxControl,
  tags: ['autodocs'],
  title: 'Components/CheckboxControl',
} satisfies Meta<typeof CheckboxControl>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
    disabled: false,
    value: 'Click me',
    variant: 'unchecked',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    value: 'Click me',
    variant: 'checked',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    value: 'Click me',
    variant: 'Disabled',
  },
}
