import type {Meta, StoryObj} from '@storybook/react'
import {DropDownMenuWithProfile} from "@/components/ui/drop-down/dropDownMenuWithProfile/dropDownWithProfile";


const meta = {
    component: DropDownMenuWithProfile,
    tags: ['autodocs'],
    title: 'Components/Dropdown Menu with Profile',
} satisfies Meta<typeof DropDownMenuWithProfile>

export default meta
type Story = StoryObj<typeof meta>

const userData = {
    name: 'Pavel',
    email: 'frontend-dev@gmail.com',
    avatar: {
    id: 'Pavel',
    image: 'src/components/ui/avatar/image/Sem.jpg'
    },
}

const value = [
    {id: 'User', label: 'My Profile'},
    {id: 'Logout', label: 'Sign Out'},
]

export const Default: Story = {
    args: {
        userData,
        value,
    },
    render: args => {

        return <DropDownMenuWithProfile {...args}/>

    },
};
