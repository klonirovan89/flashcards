import type {Meta, StoryObj} from '@storybook/react'
import {DropDownMenu} from "@/components/ui/drop-down/dropDownMenu/dropDown";


const meta = {
    component: DropDownMenu,
    tags: ['autodocs'],
    title: 'Components/Dropdown Menu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>


const value= [
    {id: 'Learn', label: 'Learn'},
    {id: 'Edit', label: 'Edit'},
    {id: 'Delete', label: 'Delete'},
]


export const Default: Story = {
    args: {
        value
    },
    render: args => {

        return <DropDownMenu {...args}/>

    },
}

