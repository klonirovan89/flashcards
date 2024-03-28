import type { Meta, StoryObj } from '@storybook/react'

import { FormValuesSignUp, SignUp } from './sign-up'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {} as any,
  render: () => {
    const onSubmit = (data: FormValuesSignUp) => {
      alert(JSON.stringify(data))
    }

    return <SignUp onSubmit={onSubmit} />
  },
}
