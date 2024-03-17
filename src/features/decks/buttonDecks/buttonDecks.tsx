import { useState } from 'react'

import { Button } from '@/components/ui/button/button'
import { Icon } from '@/components/ui/icon/Icon'
import { DeleteDecks } from '@/features/decks/deleteDecks/deleteDecks'
import { EditDecks } from '@/features/decks/editDecks/editDecks'
import { Deck } from '@/pages/decks/api/decks-types'

import s from './buttonDecks.module.scss'

export const ButtonDecks = (props: PropsType) => {
  const { authUserId, deck, disabled } = props

  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  return (
    <div>
      {authUserId === deck.userId ? (
        <div className={s.control}>
          <Button className={s.button} onClick={() => setOpenEditModal(true)} variant={'pure'}>
            <Icon height={'16px'} iconId={'Edit'} width={'16px'} />
          </Button>
          <EditDecks
            changeModalState={() => setOpenEditModal(!openEditModal)}
            deck={deck}
            open={openEditModal}
          />
          <Button
            className={s.button}
            disabled={disabled}
            onClick={() => alert('play')}
            variant={'pure'}
          >
            <Icon disabled={disabled} height={'16px'} iconId={'Learn'} width={'16px'} />
          </Button>
          <Button className={s.button} onClick={() => setOpenDeleteModal(true)} variant={'pure'}>
            <Icon height={'16px'} iconId={'Delete'} width={'16px'} />
          </Button>
          <DeleteDecks
            changeModalState={() => setOpenDeleteModal(!openDeleteModal)}
            deckId={deck.id}
            deckName={deck.name}
            open={openDeleteModal}
          />
        </div>
      ) : (
        <div className={s.control}>
          <Button
            className={s.button}
            disabled={disabled}
            onClick={() => alert('play')}
            variant={'pure'}
          >
            <Icon disabled={disabled} height={'16px'} iconId={'Learn'} width={'16px'} />
          </Button>
        </div>
      )}
    </div>
  )
}

type PropsType = {
  authUserId: string | undefined
  deck: Deck
  disabled: boolean
}
