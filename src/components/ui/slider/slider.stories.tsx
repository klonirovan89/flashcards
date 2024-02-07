import type {Meta, StoryObj} from '@storybook/react'
import {useState} from 'react'
import {Slider} from './'

const meta = {
    component: Slider,
    tags: ['autodocs'],
    title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        max: 10,
        min: 0,
        step: 1,
        value: [2, 10],
    },
    render: args => {
        const [sliderValue, setSliderValue] = useState<number[]>(args.value)

        const onValueChange = (value: number[]) => {
            setSliderValue(value)
        }

        return <Slider {...args} onValueChange={onValueChange} value={sliderValue}/>
    },
}
