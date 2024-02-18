import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { RadioGroup } from './'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/Radio Group',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    options: [
      { label: 'First', value: '1' },
      { label: 'Second', value: '2' },
      { label: 'Third', value: '3' },
    ],
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>(args.options[0].value)

    return (
      <div>
        <RadioGroup {...args} onValueChange={setSelectedValue} selectedValue={selectedValue} />
        <div style={{ marginTop: '10px' }}>Selected value: {selectedValue}</div>
      </div>
    )
  },
}

export const WithErrorMessage: Story = {
  args: {
    disabled: true,
    errorMessage: 'Some error occurred',
    options: [
      { label: 'First', value: '1' },
      { label: 'Second', value: '2' },
      { label: 'Third', value: '3' },
    ],
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>(args.options[0].value)

    return (
      <div>
        <RadioGroup {...args} onValueChange={setSelectedValue} selectedValue={selectedValue} />
        <div style={{ marginTop: '10px' }}>Selected value: {selectedValue}</div>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { label: 'First', value: '1' },
      { label: 'Second', value: '2' },
      { label: 'Third', value: '3' },
    ],
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>(args.options[0].value)

    return (
      <div>
        <RadioGroup {...args} onValueChange={setSelectedValue} selectedValue={selectedValue} />
        <div style={{ marginTop: '10px' }}>Selected value: {selectedValue}</div>
      </div>
    )
  },
}
