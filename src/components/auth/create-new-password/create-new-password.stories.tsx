import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from './create-new-password'

const meta = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Auth/Create New Password',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
