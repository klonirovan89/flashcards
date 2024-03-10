import { DeckForm } from '@/components/forms/AddNewDeckForm'
import { SuperModal } from '@/components/ui/modal'
import { useCreateDecksMutation } from '@/pages/decks/api/decks-api'
import { CreateDecksArgs } from '@/pages/decks/api/decks-types'

export const AddNewDeck = (props: PropsType) => {
  const { changeModalState, open, text, title, withTrigger } = props

  const [createDeck] = useCreateDecksMutation()

  const createNewDeck = (newDeck: CreateDecksArgs) => {
    createDeck(newDeck)
  }

  return (
    <SuperModal
      changeModalState={changeModalState}
      open={open}
      title={title}
      withTrigger={withTrigger}
    >
      <DeckForm
        changeModalState={changeModalState}
        createNewDeck={createNewDeck}
        text={text}
        withSecondary
      />
    </SuperModal>
  )
}

type PropsType = {
  changeModalState: () => void
  open: boolean
  text: string
  title: string
  withTrigger: boolean
}
