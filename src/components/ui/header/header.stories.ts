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
  avatar: {
    id: 'Pavel',
    image: 'src/components/ui/avatar/image/Sem.jpg',
  },
  email: 'frontend-dev@gmail.com',
  name: 'Pavel',
}

const value = [
  { id: 'User', label: 'My Profile' },
  { id: 'Logout', label: 'Sign Out' },
]

export const UserIsAuthorized: Story = {
  args: {
    isLogin: true,
    title: 'Sign In',
    userData,
    value,
  },
}

export const UserIsNotAuthorized: Story = {
  args: {
    isLogin: false,
    title: 'Sign In',
    userData,
    value,
  },
}
