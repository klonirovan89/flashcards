import { useState } from 'react'

import { Button } from '@/components/ui/button/button'
import { Icon } from '@/components/ui/icon/Icon'
import { AddNewDeck } from '@/features/AddNewDeck'
import { useUpdateDecksMutation } from '@/pages/decks/api/decks-api'
import { CreateDecksArgs } from '@/pages/decks/api/decks-types'

export const EditControl = (props: PropsType) => {
  const { className, deckId, deckName } = props

  const [open, setOpen] = useState<boolean>(false)

  const [deck] = useUpdateDecksMutation()

  const changeModalState = () => {
    setOpen(!open)
  }

  const closeModalWindow = () => {
    changeModalState()
  }

  const editDeck = (newDeck: CreateDecksArgs) => {
    deck({ id: deckId, ...newDeck })
      .unwrap()
      .catch(e => {
        console.log(e.data.message)
      })
  }

  return (
    <>
      <AddNewDeck
        changeModalState={changeModalState}
        closeModalWindow={closeModalWindow}
        createNewDeck={editDeck}
        deckName={deckName}
        open={open}
        text={'Edit Deck'}
        title={'Edit Deck'}
        withTrigger={false}
      />
      <Button className={className} onClick={() => setOpen(!open)} variant={'pure'}>
        <Icon height={'16px'} iconId={'Edit'} width={'16px'} />
      </Button>
    </>
  )
}

type PropsType = {
  className: string
  deckId: string
  deckName: string
}
