import type { Meta, StoryObj } from '@storybook/react'


import { RatingControl } from "./";

const meta = {
  component: RatingControl,
  tags: ['autodocs'],
  title: 'Components/RatingControl',
} satisfies Meta<typeof RatingControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 3,
  },
  render: args => {

    return <RatingControl {...args} defaultValue={args.defaultValue}/>
  },
}
