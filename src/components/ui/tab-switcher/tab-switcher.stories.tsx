import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Typography } from '../typography/typography'
import { TabSwitcher } from './'

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/Tab Switcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

const listValues = [
  { disabled: false, text: 'City', value: 'City' },
  { disabled: false, text: 'Music', value: 'Music' },
  { disabled: false, text: 'Movies', value: 'Movies' },
  { disabled: true, text: 'Disabled', value: 'Disabled' },
]

export const Default: Story = {
  args: {
    listValues,
    value: 'My cards',
  },
  render: args => {
    const [tabSwitcherValue, setTabSwitcherValue] = useState<string>(listValues[0].value)

    const onValueChange = (value: string) => {
      setTabSwitcherValue(value)
    }

    return (
      <div>
        <TabSwitcher {...args} onValueChange={onValueChange} value={tabSwitcherValue} />
        <Typography variant={'body2'}>Selected value: {tabSwitcherValue}</Typography>
      </div>
    )
  },
}
