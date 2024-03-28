import type { Meta, StoryObj } from '@storybook/react'

import { FormValuesSignIp, SignIn } from './sign-in'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Auth/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {} as any,
  render: () => {
    const onSubmit = (data: FormValuesSignIp) => {
      alert(JSON.stringify(data))
    }

    return <SignIn onSubmit={onSubmit} />
  },
}
