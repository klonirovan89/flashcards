import type { Meta, StoryObj } from '@storybook/react'
import { SelectControl } from "@/components/ui/select/select";
import { useState } from "react";

const meta = {
  component: SelectControl,
  tags: ['autodocs'],
  title: 'Components/SelectControl',
} satisfies Meta<typeof SelectControl>

export default meta
type Story = StoryObj<typeof meta>

const listValues = [
  { value: '1', label: 'Science' },
  { value: '2', label: 'Sports' },
  { value: '3', label: 'Movie' },
  { value: '4', label: 'Technology' },
  { value: '5', label: 'Music' },
]

export const Default: Story = {
  args: {
    label: "Select-box",
    listValues: listValues,
    disabled: false,
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>(args.listValues[0].label);
    const handleSelectChange = (value: string) => {
      setSelectedValue(value);
    };
    return  <SelectControl selectedValue={selectedValue} disabled={args.disabled} handleSelectChange={handleSelectChange} listValues={args.listValues} label={args.label}/>
  },
}

export const Disabled: Story = {
  args: {
    label: "Select-box",
    listValues: listValues,
    disabled: true,
  },
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string>(args.listValues[0].label);
    const handleSelectChange = (value: string) => {
      setSelectedValue(value);
    };
    return  <SelectControl selectedValue={selectedValue} disabled={args.disabled} handleSelectChange={handleSelectChange} listValues={args.listValues} label={args.label}/>
  },
}

