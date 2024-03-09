import { Button } from '@/components/ui/button/button'
import { Icon } from '@/components/ui/icon/Icon'
import { DeleteControl } from '@/features/decks/deleteControl/deleteControl'
import { EditControl } from '@/features/decks/editControl/editControl'
import { Deck } from '@/pages/decks/api/decks-types'

import s from './buttonBlock.module.scss'

export const ButtonBlock = (props: PropsType) => {
  const { authUserId, deck, disabled } = props

  return (
    <div>
      {authUserId === deck.userId ? (
        <div className={s.control}>
          <EditControl className={s.button} deckId={deck.id} deckName={deck.name} />
          <Button
            className={s.button}
            disabled={disabled}
            onClick={() => alert('play')}
            variant={'pure'}
          >
            <Icon disabled={disabled} height={'16px'} iconId={'Learn'} width={'16px'} />
          </Button>
          <DeleteControl className={s.button} deckId={deck.id} deckName={deck.name} />
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
