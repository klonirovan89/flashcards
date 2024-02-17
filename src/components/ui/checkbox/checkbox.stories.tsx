import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const OnlyCheckbox: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: args => {
    const [checked, setChecked] = useState<boolean>(args.checked)
    const onChangeCheckboxChecked = () => {
      setChecked(!checked)
    }

    return <Checkbox {...args} checked={checked} onChange={onChangeCheckboxChecked} />
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    id: 'Checked',
    label: 'Click me',
  },
  render: args => {
    const [checked, setChecked] = useState<boolean>(args.checked)
    const onChangeCheckboxChecked = () => {
      setChecked(!checked)
    }

    return <Checkbox {...args} checked={checked} onChange={onChangeCheckboxChecked} />
  },
}

export const UnChecked: Story = {
  args: {
    checked: false,
    disabled: false,
    id: 'UnChecked',
    label: 'Click me',
  },
  render: args => {
    const [checked, setChecked] = useState<boolean>(args.checked)
    const onChangeCheckboxChecked = () => {
      setChecked(!checked)
    }

    return <Checkbox {...args} checked={checked} onChange={onChangeCheckboxChecked} />
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    id: 'DisabledChecked',
    label: 'Click me',
  },
}

export const DisabledUnChecked: Story = {
  args: {
    checked: false,
    disabled: true,
    id: 'DisabledUnChecked',
    label: 'Click me',
  },
}
