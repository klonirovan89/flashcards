import type { Meta, StoryObj } from '@storybook/react'
import {DropDown} from './'

const meta = {
  component: DropDown,
  tags: ['autodocs'],
  title: 'Components/DropDown',
} satisfies Meta<typeof DropDown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {

    return <DropDown {...args}/>
  },
}
