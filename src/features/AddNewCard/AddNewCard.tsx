import { AddNewCardForm } from '@/components/forms/AddNewCardForm'
import { SuperModal } from '@/components/ui/modal'

export const AddNewCard = () => {
  return (
    <SuperModal open={false} title={'Add New Card'} withSecondary withTrigger>
      <AddNewCardForm />
    </SuperModal>
  )
}
