import type { Meta, StoryObj } from '@storybook/react'

import { FileUploaderWithImage } from './file-uploader-with-image'

const meta = {
  component: FileUploaderWithImage,
  tags: ['autodocs'],
  title: 'Components/File Uploader with Image',
} satisfies Meta<typeof FileUploaderWithImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Icon: Story = {
  args: {},
}

export const IconAndText: Story = {
  args: {},
}
