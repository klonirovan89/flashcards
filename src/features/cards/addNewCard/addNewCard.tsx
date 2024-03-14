import { CardForm } from '@/components/forms/cardForm'
import { SuperModal } from '@/components/ui/modal'
import { useCreateCardMutation } from '@/pages/cards/api/cards-api'
import { FormDataCards } from '@/pages/cards/api/cards-types'

export const AddNewCard = (props: PropsType) => {
  const { changeModalState, open, withTrigger } = props

  const [createCard] = useCreateCardMutation()

  const createNewCard = (newCard: FormDataCards) => {
    createCard(newCard)
  }

  return (
    <SuperModal
      changeModalState={changeModalState}
      open={open}
      title={'Add New Card'}
      withTrigger={withTrigger}
    >
      <CardForm changeModalState={changeModalState} createNewCard={createNewCard} withSecondary />
    </SuperModal>
  )
}

type PropsType = {
  changeModalState: () => void
  open: boolean
  withTrigger: boolean
}
