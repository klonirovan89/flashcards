import { AddNewDeck } from '@/features/AddNewDeck'
import { useCreateDecksMutation } from '@/pages/decks/api/decks-api'
import { CreateDecksArgs } from '@/pages/decks/api/decks-types'

export const AddDeck = (props: PropsType) => {
  const { changeModalState, closeModalWindow, open, text, title, withTrigger } = props

  const [createDeck] = useCreateDecksMutation()

  const createNewDeck = (newDeck: CreateDecksArgs) => {
    createDeck(newDeck)
  }

  return (
    <AddNewDeck
      changeModalState={changeModalState}
      closeModalWindow={closeModalWindow}
      createNewDeck={createNewDeck}
      open={open}
      text={text}
      title={title}
      withTrigger={withTrigger}
    />
  )
}

type PropsType = {
  changeModalState: (open: boolean) => void
  closeModalWindow: () => void
  open: boolean
  text: string
  title: string
  withTrigger: boolean
}
