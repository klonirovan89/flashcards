import type { Meta, StoryObj } from '@storybook/react'
import { Select } from "@/components/ui/select/select";
import { useState } from "react";

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const valuesList = [
  { value: '1', label: 'Science' },
  { value: '2', label: 'Sports' },
  { value: '3', label: 'Movie' },
  { value: '4', label: 'Technology' },
  { value: '5', label: 'Music' },
]

export const Default: Story = {
  args: {
    label: "Select-box",
    valuesList,
    disabled: false,
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>(args.valuesList[0].label);
    const handleSelectChange = (value: string) => {
      setSelectedValue(value);
    };
    return  <Select {...args} selectedValue={selectedValue} handleSelectChange={handleSelectChange}/>
  },
}

export const Disabled: Story = {
  args: {
    label: "Select-box",
    valuesList,
    disabled: true,
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>(args.valuesList[0].label);
    const handleSelectChange = (value: string) => {
      setSelectedValue(value);
    };
    return  <Select {...args} selectedValue={selectedValue} handleSelectChange={handleSelectChange}/>
  },
}

