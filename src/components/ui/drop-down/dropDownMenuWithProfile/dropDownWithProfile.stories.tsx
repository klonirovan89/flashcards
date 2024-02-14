import type { Meta, StoryObj } from '@storybook/react'

import { DropDownMenuWithProfile } from '@/components/ui/drop-down/dropDownMenuWithProfile/dropDownWithProfile'

const meta = {
  component: DropDownMenuWithProfile,
  tags: ['autodocs'],
  title: 'Components/Dropdown Menu with Profile',
} satisfies Meta<typeof DropDownMenuWithProfile>

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

export const Default: Story = {
  args: {
    userData,
    value,
  },
  render: args => {
    return <DropDownMenuWithProfile {...args} />
  },
}
