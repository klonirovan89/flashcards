import s from './createControlBlock.module.css'
import { AddNewDeck } from '@/features/decks/addNewDeck'
import { Typography } from '@/components/ui/typography'
import { useState } from 'react'

export const CreateControlBlock = () => {
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
