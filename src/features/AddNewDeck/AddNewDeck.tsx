import { AddNewDeckForm } from '@/components/forms/AddNewDeckForm'
import { SuperModal } from '@/components/ui/modal'

export const AddNewDeck = () => {
  return (
    <SuperModal open={false} title={'Add New Deck'} withSecondary withTrigger>
      <AddNewDeckForm />
    </SuperModal>
  )
}
