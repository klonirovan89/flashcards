import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { SliderControl } from './'

const meta = {
  component: SliderControl,
  tags: ['autodocs'],
  title: 'Components/SliderControl',
} satisfies Meta<typeof SliderControl>

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

    const onChangeSliderValue = (value: number[]) => {
      setSliderValue(value)
    }

    return <SliderControl {...args} onChange={onChangeSliderValue} value={sliderValue} />
  },
}
