import type { Meta, StoryObj } from '@storybook/react'

import { BackButton } from './backButton'

const meta = {
  component: BackButton,
  tags: ['autodocs'],
  title: 'Components/Back Button',
} satisfies Meta<typeof BackButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
