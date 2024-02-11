import type {Meta, StoryObj} from '@storybook/react'
import {Avatar} from "@/components/ui/avatar/avatar";


const meta = {
    component: Avatar,
    tags: ['autodocs'],
    title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarStory : Story = {
    args: {
        value: {
            id: 'Sem',
            image: 'src/components/ui/avatar/image/Sem.jpg',
        },
    },
    render: args => {

        return <Avatar {...args} value={args.value}/>

    },
}

export const AvatarFallback : Story = {
    args: {
        value: {
            id: 'Sem',
            image: '',
        },
    },
    render: args => {

        return <Avatar {...args} value={args.value}/>

    },
}

