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
const starsList = [1, 2, 3, 4, 5];

export const Default: Story = {
  args: {
    defaultValue,
    starsList,
  },
  render: args => {

    return <Rating {...args}/>
  },
}
