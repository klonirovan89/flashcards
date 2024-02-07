import type {Meta, StoryObj} from '@storybook/react'
import {DropdownMenu} from './'

const meta = {
    component: DropdownMenu,
    tags: ['autodocs'],
    title: 'Components/Dropdown Menu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const value = ['Learn', 'Edit', 'Delete'];

export const Default: Story = {
    args: {
        value,
    },
    render: args => {

        return <DropdownMenu {...args}/>

    },
}
