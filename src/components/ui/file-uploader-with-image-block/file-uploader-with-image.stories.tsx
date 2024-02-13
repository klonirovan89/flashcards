import type {Meta, StoryObj} from "@storybook/react";
import {FileUploaderWithImage} from './file-uploader-with-image';

const meta = {
    component: FileUploaderWithImage,
    tags: ["autodocs"],
    title: "Components/File Uploader"
} satisfies Meta<typeof FileUploaderWithImage>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        text: 'Choose file',
    },
};

export const Icon: Story = {
    args: {
        iconId: 'Edit',
    },
};

export const IconAndText: Story = {
    args: {
        iconId: 'Edit',
        text: 'Choose file',
    },
};