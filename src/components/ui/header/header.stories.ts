import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

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

export const UserIsAuthorized: Story = {
  args: {
    userData,
    value,
    isLogin: true,
    title: 'Sign In'
  },
}

export const UserIsNotAuthorized: Story = {
  args: {
    userData,
    value,
    isLogin: false,
    title: 'Sign In'
  },
}
