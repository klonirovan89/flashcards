import type {Meta, StoryObj} from '@storybook/react'
import {useState} from 'react'
import {TabSwitcher} from './'
import {Typography} from "../typography/typography";

const meta = {
    component: TabSwitcher,
    tags: ['autodocs'],
    title: 'Components/Tab Switcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

const listValues = [
    {value: 'City', text: 'City', disabled: false},
    {value: 'Music', text: 'Music', disabled: false},
    {value: 'Movies', text: 'Movies', disabled: false},
    {value: 'Disabled', text: 'Disabled', disabled: true},
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
                <TabSwitcher {...args} onValueChange={onValueChange} value={tabSwitcherValue}/>
                <Typography variant={"body2"}>Selected value: {tabSwitcherValue}</Typography>
            </div>
        )
    },
}
