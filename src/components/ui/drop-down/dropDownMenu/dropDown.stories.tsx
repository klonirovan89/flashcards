import type { Meta, StoryObj } from '@storybook/react'

import { DropDownMenu } from '@/components/ui/drop-down/dropDownMenu/dropDown'

const meta = {
  component: DropDownMenu,
  tags: ['autodocs'],
  title: 'Components/Dropdown Menu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { handler: () => alert('Learn'), id: 'Learn', label: 'Learn' },
      { handler: () => alert('Edit'), id: 'Edit', label: 'Edit' },
      { handler: () => alert('Delete'), id: 'Delete', label: 'Delete' },
    ],
  },
  render: args => {
    return (
      <div>
        <div>Click me:</div>
        <DropDownMenu options={args.options} />
      </div>
    )
  },
}
