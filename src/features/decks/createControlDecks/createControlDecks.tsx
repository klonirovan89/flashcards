import { useState } from 'react'

import { Typography } from '@/components/ui/typography'
import { AddNewDeck } from '@/features/decks/addNewDeck'

import s from './createControlDecks.module.css'

export const CreateControlDecks = () => {
  const [open, setOpen] = useState<boolean>(false)

  const changeModalState = () => {
    setOpen(!open)
  }

  return (
    <div className={s.top}>
      <Typography variant={'h1'}>Packs list</Typography>
      <AddNewDeck
        changeModalState={changeModalState}
        open={open}
        text={'Add New Deck'}
        title={'Add New Deck'}
        withTrigger
      />
    </div>
  )
}
