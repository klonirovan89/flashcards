import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './check-email'

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
