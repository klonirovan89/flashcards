import type {Meta, StoryObj} from '@storybook/react'

import {Table} from './'

const meta = {
    component: Table,
    tags: ['autodocs'],
    title: 'Components/New Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Decks: Story = {
    args: {
        columns: [
            {id: 'name', label: 'Name'},
            {id: 'cardsCount', label: 'Cards'},
            {id: 'update', label: 'Last update'},
            {id: 'author.name', label: 'Crated by'},
        ],
    },

}