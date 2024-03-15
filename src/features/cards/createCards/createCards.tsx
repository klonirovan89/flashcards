import { useState } from 'react'

import s from './createCards.module.scss'

import { AddNewCard } from '../addNewCard/addNewCard'

export const CreateCards = () => {
  const [open, setOpen] = useState<boolean>(false)

  const changeModalState = () => {
    setOpen(!open)
  }

  return (
    <div className={s.top}>
      <AddNewCard changeModalState={changeModalState} open={open} withTrigger />
    </div>
  )
}
