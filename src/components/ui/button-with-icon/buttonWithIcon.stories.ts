import type { Meta, StoryObj } from '@storybook/react'

import { ButtonWithIcon } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: ButtonWithIcon,
  tags: ['autodocs'],
  title: 'Components/Button With Icon',
} satisfies Meta<typeof ButtonWithIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    iconId: 'Logout',
    text: 'Button primary',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    disabled: false,
    iconId: 'Logout',
    text: 'Button secondary',
    variant: 'secondary',
  },
}
