import type { Meta, StoryObj } from '@storybook/react'

import { FormButtons } from './'

const meta = {
  argTypes: {},
  component: FormButtons,
  tags: ['autodocs'],
  title: 'Components/FormButtons',
} satisfies Meta<typeof FormButtons>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithValue: Story = {
  args: {
    primaryButtonText: 'Text',
    withSecondary: true,
  },
}
