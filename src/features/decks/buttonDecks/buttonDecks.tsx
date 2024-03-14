import { Button } from '@/components/ui/button/button'
import { Icon } from '@/components/ui/icon/Icon'
import { DeleteDecks } from '@/features/decks/deleteDecks/deleteDecks'
import { EditDecks } from '@/features/decks/editDecks/editDecks'
import { Deck } from '@/pages/decks/api/decks-types'

import s from './buttonDecks.module.scss'

export const ButtonDecks = (props: PropsType) => {
  const { authUserId, deck, disabled } = props

  return (
    <div>
      {authUserId === deck.userId ? (
        <div className={s.control}>
          <EditDecks className={s.button} deck={deck} />
          <Button
            className={s.button}
            disabled={disabled}
            onClick={() => alert('play')}
            variant={'pure'}
          >
            <Icon disabled={disabled} height={'16px'} iconId={'Learn'} width={'16px'} />
          </Button>
          <DeleteDecks className={s.button} deckId={deck.id} deckName={deck.name} />
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
