import { DeckForm } from '@/components/forms/deckForm'
import { SuperModal } from '@/components/ui/modal'
import { useUpdateDecksMutation } from '@/pages/decks/api/decks-api'
import { CreateDecksArgs, Deck } from '@/pages/decks/api/decks-types'

export const EditDecks = (props: PropsType) => {
  const { changeModalState, deck, open } = props

  const [deckAPI] = useUpdateDecksMutation()

  const editDeck = (newDeck: CreateDecksArgs) => {
    deckAPI({ data: newDeck, id: deck.id })
      .unwrap()
      .catch(e => {
        console.log(e.data.message)
      })
  }

  return (
    <SuperModal
      changeModalState={changeModalState}
      open={open}
      title={'Edit Deck'}
      withTrigger={false}
    >
      <DeckForm
        changeModalState={changeModalState}
        createNewDeck={editDeck}
        deck={deck}
        text={'Edit Deck'}
        withSecondary
      />
    </SuperModal>
  )
}

type PropsType = {
  changeModalState: () => void
  deck: Deck
  open: boolean
}
