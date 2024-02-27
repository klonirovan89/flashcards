import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Deck } from '@/features/deckTable/decks'

import { Sort, Table } from './'
import {DeckRow} from "@/features/deckTable/deckRow";

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/New Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const data = {
  items: [
    {
      author: {
        id: 'df6760fa-5ae1-46ef-916e-85f670d7b903',
        name: 'test',
      },
      cardsCount: 0,
      cover:
        'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/9938cef3-d6c9-4ec8-838f-6e94abbc684b-photo_2024-02-02_21-43-10.jpg',
      created: '2024-02-27T07:46:14.763Z',
      id: 'clt42d84q015dxh2g9a9p532l',
      isPrivate: false,
      name: 'test',
      updated: '2024-02-27T07:46:14.763Z',
      userId: 'df6760fa-5ae1-46ef-916e-85f670d7b903',
    },
    {
      author: {
        id: 'df6760fa-5ae1-46ef-916e-85f670d7b903',
        name: 'test',
      },
      cardsCount: 0,
      cover: '',
      created: '2024-02-27T07:46:14.763Z',
      id: 'clt42d84q0fdfd15dxh2g9a9p532l',
      isPrivate: false,
      name: 'test',
      updated: '2024-02-27T07:46:14.763Z',
      userId: 'df6760fa-5ae1-46ef-916e-85f670d7b903',
    },
  ],
  pagination: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 2579,
    totalPages: 258,
  },
}

export const Decks: Story = {
  args: {
    children: data.items.map((el: Deck) => <DeckRow deck={el} key={el.id} />),
    columns: [
      { id: 'name', label: 'Name', sortable: true },
      { id: 'cardsCount', label: 'Cards', sortable: true },
      { id: 'updated', label: 'Last update', sortable: true },
      { id: 'author.name', label: 'Created by', sortable: true },
      { id: 'actions', label: '', sortable: false },
    ],
  },

  render: args => {
    const [sort, setSort] = useState<Sort>(null)

    return (
      <Table columns={args.columns} onSort={setSort} sort={sort}>
        {args.children}
      </Table>
    )
  },
}
