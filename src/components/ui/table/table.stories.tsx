import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { CardRow } from '@/features/cards/cardsTable/cardRow'
import { DeckRow } from '@/features/decks/decksTable/deckRow'
import { Card } from '@/pages/cards/api/cards-types'
import { Deck } from '@/pages/decks/api/decks-types'

import { Sort, Table } from './'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const dataDecks = {
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
        id: '11111-5ae1-46ef-916e-85f670d7b903',
        name: 'test',
      },
      cardsCount: 0,
      cover: '',
      created: '2024-02-27T07:46:14.763Z',
      id: 'clt42d84q0fdfd15dxh2g9a9p532l',
      isPrivate: false,
      name: 'test',
      updated: '2024-02-27T07:46:14.763Z',
      userId: '11111-5ae1-46ef-916e-85f670d7b903',
    },
  ],
  pagination: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 2579,
    totalPages: 258,
  },
}
const dataCards = {
  items: [
    {
      answer: 'sdfsdfs',
      answerImg: null,
      answerVideo: null,
      created: '2024-02-27T21:36:30.720Z',
      deckId: 'clt4vwmdj02e8xh2g6tkbidhn',
      grade: 0,
      id: 'clt4w0ydc02e9xh2g2b06vz9j',
      question: 'fdsfs',
      questionImg: null,
      questionVideo: null,
      shots: 0,
      updated: '2024-02-27T21:36:30.720Z',
      userId: 'df6760fa-5ae1-46ef-916e-85f670d7b903',
    },
  ],
  pagination: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 1,
    totalPages: 1,
  },
}

export const Decks: Story = {
  args: {
    children: dataDecks.items.map((el: Deck) => (
      <DeckRow authUserId={'df6760fa-5ae1-46ef-916e-85f670d7b903'} deck={el} key={el.id} />
    )),
    columns: [
      { key: 'name', sortable: true, title: 'Name' },
      { key: 'cardsCount', sortable: true, title: 'Cards' },
      { key: 'updated', sortable: true, title: 'Last update' },
      { key: 'author.name', sortable: true, title: 'Created by' },
      { key: 'actions', sortable: false, title: '' },
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

export const Cards: Story = {
  args: {
    children: dataCards.items.map((el: Card) => (
      <CardRow card={el} deckId={''} isMyDeck key={el.id} />
    )),
    columns: [
      { key: 'question', sortable: true, title: 'Question' },
      { key: 'answer', sortable: true, title: 'Answer' },
      { key: 'updated', sortable: true, title: 'Last Updated' },
      { key: 'grade', sortable: true, title: 'Grade' },
      { key: 'controls', sortable: false, title: '' },
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
