import { useState } from 'react'

import { AddNewDeckForm } from '@/components/forms/AddNewDeckForm'
import { SuperModal } from '@/components/ui/modal'

export const AddNewDeck = () => {
  const [open, setOpen] = useState<boolean>(false)

  const changeModalState = (open: boolean) => {
    setOpen(open)
  }

  return (
    <SuperModal changeModalState={changeModalState} open={open} title={'Add New Deck'} withTrigger>
      <AddNewDeckForm changeModalState={changeModalState} withSecondary />
    </SuperModal>
  )
}
