import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { FormButtons } from '@/components/ui/form-buttons'
import { SuperModal } from '@/components/ui/modal'
import { useDeleteDecksMutation } from '@/pages/decks/api/decks-api'

export const DeleteDecks = (props: PropsType) => {
  const { changeModalState, deckId, deckName, open } = props

  const [deck] = useDeleteDecksMutation()
  const navigate = useNavigate()
  const deleteDeck = async () => {
    await deck({ id: deckId })
      .unwrap()
      .then(() => {
        toast.success('Deck deleted', { containerId: 'appId' })
        navigate('/')
      })
      .catch(e => {
        toast.error(e.error, { containerId: 'appId' })
      })
  }

  return (
    <>
      <SuperModal
        changeModalState={changeModalState}
        open={open}
        title={'Delete Deck'}
        withTrigger={false}
      >
        Do you really want to remove {deckName} ? All cards will be deleted.
        <FormButtons
          callback={deleteDeck}
          changeModalState={changeModalState}
          primaryButtonText={'Delete Deck'}
          withSecondary
        />
      </SuperModal>
    </>
  )
}

type PropsType = {
  changeModalState: () => void
  deckId: string
  deckName: string
  open: boolean
}
