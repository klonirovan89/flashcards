import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from "./";

const meta = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

const defaultValue = 3;

export const Default: Story = {
  args: {
    defaultValue,
  },
  render: args => {

    return <Rating {...args}/>
  },
}
