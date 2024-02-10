import type {Meta, StoryObj} from '@storybook/react'
import {Avatar} from "@/components/ui/avatar/avatar";


const meta = {
    component: Avatar,
    tags: ['autodocs'],
    title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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

