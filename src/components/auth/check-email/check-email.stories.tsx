import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouterDecorator } from '@/BrowserRouterDecorator'

import { CheckEmail } from './check-email'

const meta = {
  component: CheckEmail,
  decorators: [BrowserRouterDecorator],
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
