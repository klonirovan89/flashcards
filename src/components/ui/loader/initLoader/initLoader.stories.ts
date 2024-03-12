import type { Meta, StoryObj } from '@storybook/react'

import { InitLoader } from './'

const meta = {
  argTypes: {},
  component: InitLoader,
  tags: ['autodocs'],
  title: 'Components/InitLoader',
} satisfies Meta<typeof InitLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
