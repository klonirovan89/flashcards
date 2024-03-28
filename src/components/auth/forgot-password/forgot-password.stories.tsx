import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword, FormValuesRecoveryPassword } from './forgot-password'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {} as any,
  render: () => {
    const onSubmit = (data: FormValuesRecoveryPassword) => {
      alert(JSON.stringify(data))
    }

    return <ForgotPassword onSubmit={onSubmit} />
  },
}
