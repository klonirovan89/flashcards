import type {Meta, StoryObj} from "@storybook/react";
import {RadioGroup} from "./";
import {useState} from "react";

const meta = {
    component: RadioGroup,
    tags: ["autodocs"],
    title: "Components/Radio Group"
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        options: [
            {label: "First", value: "1"},
            {label: "Second", value: "2"},
            {label: "Third", value: "3"}
        ],
        disabled: false
    },
    render: args => {
        const [selectedValue, setSelectedValue] = useState<string>(args.options[0].value);

        return (
            <div>
                <RadioGroup {...args} onValueChange={setSelectedValue} selectedValue={selectedValue}/>
                <div style={{marginTop: "10px"}}>Selected value: {selectedValue}</div>
            </div>
        );
    }
};

export const WithErrorMessage: Story = {
    args: {
        options: [
            {label: "First", value: "1"},
            {label: "Second", value: "2"},
            {label: "Third", value: "3"}
        ],
        disabled: true,
        errorMessage: "Some error occurred"
    },
    render: args => {
        const [selectedValue, setSelectedValue] = useState<string>(args.options[0].value);

        return (
            <div>
                <RadioGroup {...args} onValueChange={setSelectedValue} selectedValue={selectedValue}/>
                <div style={{marginTop: "10px"}}>Selected value: {selectedValue}</div>
            </div>
        );
    }
};

export const Disabled: Story = {
    args: {
        options: [
            {label: "First", value: "1"},
            {label: "Second", value: "2"},
            {label: "Third", value: "3"}
        ],
        disabled: true
    },
    render: args => {
        const [selectedValue, setSelectedValue] = useState<string>(args.options[0].value);

        return (
            <div>
                <RadioGroup {...args} onValueChange={setSelectedValue} selectedValue={selectedValue}/>
                <div style={{marginTop: "10px"}}>Selected value: {selectedValue}</div>
            </div>
        );
    }
};
