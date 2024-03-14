import { useState } from 'react'

import { Button } from '@/components/ui/button/button'
import { FormButtons } from '@/components/ui/form-buttons'
import { Icon } from '@/components/ui/icon/Icon'
import { SuperModal } from '@/components/ui/modal'
import { useDeleteDecksMutation } from '@/pages/decks/api/decks-api'

export const DeleteDecks = (props: PropsType) => {
  const { className, deckId, deckName } = props

  const [open, setOpen] = useState(false)

  const [deck] = useDeleteDecksMutation()

  const deleteDeck = async () => {
    await deck({ id: deckId })
      .unwrap()
      .catch(e => {
        console.log(e.data.message)
      })
    setOpen(false)
  }

  return (
    <>
      <SuperModal
        changeModalState={() => setOpen(!open)}
        open={open}
        title={'Delete Deck'}
        withTrigger={false}
      >
        Do you really want to remove {deckName} ? All cards will be deleted.
        <FormButtons
          callback={deleteDeck}
          changeModalState={() => setOpen(!open)}
          primaryButtonText={'Delete Pack'}
          withSecondary
        />
      </SuperModal>
      <Button className={className} onClick={() => setOpen(!open)} variant={'pure'}>
        <Icon height={'16px'} iconId={'Delete'} width={'16px'} />
      </Button>
    </>
  )
}

type PropsType = {
  className: string
  deckId: string
  deckName: string
}
