import { useState } from 'react'

import { AddNewCardForm } from '../../components/forms/CardForm'
import { SuperModal } from '@/components/ui/modal'

export const AddNewCard = () => {
  const [open, setOpen] = useState<boolean>(false)

  const changeModalState = () => {
    setOpen(!open)
  }

  return (
    <SuperModal changeModalState={changeModalState} open={open} title={'Add New Card'} withTrigger>
      <AddNewCardForm changeModalState={changeModalState} withSecondary />
    </SuperModal>
  )
}
