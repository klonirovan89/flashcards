import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxControl } from './'
import { useState } from "react";


const meta = {
  component: CheckboxControl,
  tags: ['autodocs'],
  title: 'Components/CheckboxControl',
} satisfies Meta<typeof CheckboxControl>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Click me',
    variant: 'unchecked',
  },
  render: args => {
    const [checked, setChecked] = useState<boolean>(args.checked)
    const onChangeCheckboxChecked = () => {
      setChecked(!checked)
    }
    return <CheckboxControl {...args} onChange={onChangeCheckboxChecked} checked={checked} />
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Click me',
    variant: 'checked',
  },
  render: args => {
    const [checked, setChecked] = useState<boolean>(args.checked)
    const onChangeCheckboxChecked = () => {
      setChecked(!checked)
    }
    return <CheckboxControl {...args} onChange={onChangeCheckboxChecked} checked={checked} />
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Click me',
    variant: 'Disabled',
  },
  render: args => {
    const [checked, setChecked] = useState<boolean>(args.checked)
    const onChangeCheckboxChecked = () => {
      setChecked(!checked)
    }
    return <CheckboxControl {...args} onChange={onChangeCheckboxChecked} checked={checked} />
  },
}
