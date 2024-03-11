import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Typography } from '../typography/typography'
import { TabSwitcher } from './'
import {ListValuesType} from "@/features/decks/filterControlBlock";

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/Tab Switcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

const listValues: ListValuesType[] = [
  { disabled: false, text: 'City', value: 'City' },
  { disabled: false, text: 'Music', value: 'Music' },
  { disabled: false, text: 'Movies', value: 'Movies' },
  { disabled: true, text: 'Disabled', value: 'Disabled' },
]

export const Default: Story = {
  args: {
    listValues
  },
  render: args => {

    const [tabSwitcherValue, setTabSwitcherValue] = useState<string>(listValues[0].value)

    const onValueChange = (value: string) => {
      setTabSwitcherValue(value)
    }

    return (
      <div>
        <TabSwitcher onValueChange={onValueChange} listValues={args.listValues} tabSwitcherValue={tabSwitcherValue} text={'Show decks cards'}/>
        <Typography variant={'body2'}>Selected value: {tabSwitcherValue}</Typography>
      </div>
    )
  },
}
