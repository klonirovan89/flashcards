import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./";
import React from "react";


const meta = {
  component: Table.Root,
  tags: ["autodocs"],
  title: "Components/Table"
} satisfies Meta<typeof Table.Root>;

export default meta
type Story = StoryObj<typeof meta>


const data = [
  {
    id: "01",
    name: "Movies 90s",
    category: "Movies",
    author: "Lady Gaga",
    date: "30.08.2023",
    rating: 4
  },
  {
    id: "02",
    name: "Music 80s",
    category: "Music",
    author: "Rihanna",
    date: "30.09.2023",
    rating: 3
  },
  {
    id: "03",
    name: "Cities",
    category: "Geography",
    author: "Katy Perry",
    date: "30.10.2023",
    rating: 5
  }
];

export const Default: Story = {
  args: {
    data },
  render: args => {

    return (
      <Table.Root {...args}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Rating</Table.HeadCell>
            <Table.HeadCell>Control</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {data.map(el => (
            <Table.Row key={el.id}>
              <Table.Cell>{el.name}</Table.Cell>
              <Table.Cell>{el.category}</Table.Cell>
              <Table.Cell>{el.author}</Table.Cell>
              <Table.Cell>{el.date}</Table.Cell>
              <Table.Cell>{el.rating}</Table.Cell>
              <Table.Cell>Control</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
}