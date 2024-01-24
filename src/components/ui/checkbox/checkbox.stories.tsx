import type {Meta, StoryObj} from '@storybook/react'

import {CheckboxControl} from './'
import {useState} from "react";


const meta = {
    component: CheckboxControl,
    tags: ['autodocs'],
    title: 'Components/CheckboxControl',
} satisfies Meta<typeof CheckboxControl>

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
        return <CheckboxControl {...args} onChange={onChangeCheckboxChecked} checked={checked}/>
    },
}

export const Checked: Story = {
    args: {
        checked: true,
        disabled: false,
        label: 'Click me',
    },
    render: args => {
        const [checked, setChecked] = useState<boolean>(args.checked)
        const onChangeCheckboxChecked = () => {
            setChecked(!checked)
        }
        return <CheckboxControl {...args} onChange={onChangeCheckboxChecked} checked={checked}/>
    },
}

export const UnChecked: Story = {
    args: {
        checked: false,
        disabled: false,
        label: 'Click me',
    },
    render: args => {
        const [checked, setChecked] = useState<boolean>(args.checked)
        const onChangeCheckboxChecked = () => {
            setChecked(!checked)
        }
        return <CheckboxControl {...args} onChange={onChangeCheckboxChecked} checked={checked}/>
    },
}

export const DisabledChecked: Story = {
    args: {
        checked: true,
        disabled: true,
        label: 'Click me',
    },
}

export const DisabledUnChecked: Story = {
    args: {
        checked: false,
        disabled: true,
        label: 'Click me',
    },
}
