import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components/ui/avatar/avatar'

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarStory: Story = {
  args: {
    src: 'src/components/ui/avatar/image/Sem.jpg',
    userName: 'Keanu Reeves',
  },
  render: args => {
    return <Avatar {...args} src={args.src} userName={args.userName} />
  },
}

export const AvatarFallback: Story = {
  args: {
    userName: 'Keanu Reeves',
  },
  render: args => {
    return <Avatar {...args} userName={args.userName} />
  },
}
