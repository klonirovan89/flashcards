import type { Meta, StoryObj } from '@storybook/react'

import {Sort, Table} from './'
import {useState} from "react";

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
      { id: 'name', label: 'Name', sortable: true},
      { id: 'cardsCount', label: 'Cards', sortable: true },
      { id: 'updated', label: 'Last update', sortable: true },
      { id: 'author.name', label: 'Created by', sortable: true },
      { id: 'actions', label: '', sortable: false },
    ],
    data: {
      items: [
        {
          author: {
            id: 'df6760fa-5ae1-46ef-916e-85f670d7b903',
            name: 'test',
          },
          id: 'clt42d84q015dxh2g9a9p532l',
          userId: 'df6760fa-5ae1-46ef-916e-85f670d7b903',
          name: 'test',
          isPrivate: false,
          cover:
            'https://andrii-flashcards.s3.eu-central-1.amazonaws.com/9938cef3-d6c9-4ec8-838f-6e94abbc684b-photo_2024-02-02_21-43-10.jpg',
          created: '2024-02-27T07:46:14.763Z',
          updated: '2024-02-27T07:46:14.763Z',
          cardsCount: 0,
        },
        {
          author: {
            id: 'df6760fa-5ae1-46ef-916e-85f670d7b903',
            name: 'test',
          },
          id: 'clt42d84q0fdfd15dxh2g9a9p532l',
          userId: 'df6760fa-5ae1-46ef-916e-85f670d7b903',
          name: 'test',
          isPrivate: false,
          cover: '',
          created: '2024-02-27T07:46:14.763Z',
          updated: '2024-02-27T07:46:14.763Z',
          cardsCount: 0,
        },
      ],
      pagination: {
        currentPage: 1,
        itemsPerPage: 10,
        totalItems: 2579,
        totalPages: 258,
      },
    },
  },
  render: args => {
    const [sort, setSort] = useState<Sort>(null)


    return  <Table columns={args.columns} data={args.data} sort={sort} onSort={setSort}/>
  },
}
