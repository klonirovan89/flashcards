import { Meta, StoryObj } from '@storybook/react'

import { SuperModal } from '.'
import { Button } from '../button'

const meta = {
  argTypes: {
    open: {
      control: { type: 'radio' },
      options: ['Open', 'Closed'],
    },
  },
  component: SuperModal,
  tags: ['autodocs'],
  title: 'Components/SuperModal',
} satisfies Meta<typeof SuperModal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: <Button variant={'primary'}>sdhfjkshdgfsd</Button>,
    open: false,
    title: 'ModalTitle',
    withSecondary: true,
    withTrigger: true,
  },
}
