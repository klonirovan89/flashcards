import { useState } from 'react'

import { AddNewDeck } from '@/features/decks/addNewDeck'

import s from './createDecks.module.scss'

export const CreateDecks = () => {
  const [open, setOpen] = useState<boolean>(false)

  const changeModalState = () => {
    setOpen(!open)
  }

  return (
    <div className={s.top}>
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
