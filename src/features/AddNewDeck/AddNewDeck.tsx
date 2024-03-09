import { AddNewDeckForm } from '@/components/forms/AddNewDeckForm'
import { SuperModal } from '@/components/ui/modal'
import { CreateDecksArgs } from '@/pages/decks/api/decks-types'

export const AddNewDeck = (props: PropsType) => {
  const {
    changeModalState,
    closeModalWindow,
    createNewDeck,
    deckName,
    open,
    text,
    title,
    withTrigger,
  } = props

  return (
    <SuperModal
      changeModalState={changeModalState}
      open={open}
      title={title}
      withTrigger={withTrigger}
    >
      <AddNewDeckForm
        changeModalState={changeModalState}
        closeModalWindow={closeModalWindow}
        createNewDeck={createNewDeck}
        deckName={deckName}
        text={text}
        withSecondary
      />
    </SuperModal>
  )
}

type PropsType = {
  changeModalState: (open: boolean) => void
  closeModalWindow: () => void
  createNewDeck: (newDeck: CreateDecksArgs) => void
  deckName?: string
  open: boolean
  text: string
  title: string
  withTrigger: boolean
}
