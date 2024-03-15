import s from './buttonCards.module.scss'
import {Card} from "@/pages/cards/api/cards-types";
import {EditCards} from "@/features/cards/editCards";

export const ButtonCards = (props: PropsType) => {
  const { card, deckId } = props

  return (
        <div className={s.control}>
          <EditCards className={s.button} card={card} deckId={deckId}/>
          {/*<DeleteDecks className={s.button} cardId={card.id} />*/}
        </div>
  )
}

type PropsType = {
  card: Card
  deckId: string
}
