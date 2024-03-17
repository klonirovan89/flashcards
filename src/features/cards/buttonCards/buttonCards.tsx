import { DeleteCards } from '@/features/cards/deleteCards'
import { EditCards } from '@/features/cards/editCards'
import { Card } from '@/pages/cards/api/cards-types'

import s from './buttonCards.module.scss'

export const ButtonCards = (props: PropsType) => {
  const { card, deckId } = props

  return (
    <div className={s.control}>
      <EditCards card={card} className={s.button} deckId={deckId} />
      <DeleteCards card={card} className={s.button} />
    </div>
  )
}

type PropsType = {
  card: Card
  deckId: string
}
