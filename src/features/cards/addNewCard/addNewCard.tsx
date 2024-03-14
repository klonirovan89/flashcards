import { useState } from 'react'

import { SuperModal } from '../../../components/ui/modal/modal'

import { CardForm } from '../../../components/forms/cardForm'

export const AddNewCard = () => {
  const [open, setOpen] = useState<boolean>(false)

  const changeModalState = () => {
    setOpen(!open)
  }

  return (
    <SuperModal changeModalState={changeModalState} open={open} title={'Add New Card'} withTrigger>
      <CardForm changeModalState={changeModalState} withSecondary />
    </SuperModal>
  )
}
