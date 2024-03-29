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

export const Default: Story = {
  args: {
    listValues: [
      { disabled: false, text: 'City', value: 'City' },
      { disabled: false, text: 'Music', value: 'Music' },
      { disabled: false, text: 'Movies', value: 'Movies' },
      { disabled: true, text: 'Disabled', value: 'Disabled' },
    ],
    text: 'Show decks cards',
  },
  render: args => {
    const [tabSwitcherValue, setTabSwitcherValue] = useState<string>(args.listValues[0].value)
    const onChangeTabSwitcherValue = (value: string) => {
      setTabSwitcherValue(value)
    }

    return (
      <div>
        <TabSwitcher
          listValues={args.listValues}
          onChangeTabSwitcherValue={onChangeTabSwitcherValue}
          tabSwitcherValue={tabSwitcherValue}
          text={args.text}
        />
        <Typography variant={'body2'}>Selected value: {tabSwitcherValue}</Typography>
      </div>
    )
  },
}
