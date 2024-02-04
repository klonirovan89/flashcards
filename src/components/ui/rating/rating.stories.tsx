import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { RatingControl } from "./";

const meta = {
  component: RatingControl,
  tags: ['autodocs'],
  title: 'Components/RatingControl',
} satisfies Meta<typeof RatingControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {

    return <RatingControl {...args} />
  },
}
