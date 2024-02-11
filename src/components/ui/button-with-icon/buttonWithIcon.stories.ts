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
    text: 'Button primary',
    disabled: false,
    variant: 'primary',
    iconId: 'Logout',
  },
}
