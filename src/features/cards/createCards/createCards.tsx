import { useState } from 'react'

import s from './createCards.module.scss'

import { AddNewCard } from '../addNewCard/addNewCard'

export const CreateCards = (props: PropsType) => {
  const {deckId} = props
  const [open, setOpen] = useState<boolean>(false)

  const changeModalState = () => {
    setOpen(!open)
  }

  return (
    <div className={s.top}>
      <AddNewCard deckId={deckId} changeModalState={changeModalState} open={open} withTrigger />
    </div>
  )
}

type PropsType = {
  deckId: string
}
