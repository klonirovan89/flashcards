import { DeckForm } from '@/components/forms/deckForm'
import { SuperModal } from '@/components/ui/modal'
import { useCreateDecksMutation } from '@/pages/decks/api/decks-api'
import { CreateDecksArgs } from '@/pages/decks/api/decks-types'

export const AddNewDeck = (props: PropsType) => {
  const { changeModalState, open, withTrigger } = props

  const [createDeck] = useCreateDecksMutation()

  const createNewDeck = (newDeck: CreateDecksArgs) => {
    createDeck(newDeck)
  }

  return (
    <SuperModal
      changeModalState={changeModalState}
      open={open}
      title={'Add New Deck'}
      withTrigger={withTrigger}
    >
      <DeckForm
        changeModalState={changeModalState}
        createNewDeck={createNewDeck}
        text={'Add New Deck'}
        withSecondary
      />
    </SuperModal>
  )
}

type PropsType = {
  changeModalState: () => void
  open: boolean
  withTrigger: boolean
}
