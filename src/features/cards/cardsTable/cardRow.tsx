import NoPhoto from '@/assets/icons/NoPhoto.png'
import { Rating } from '@/components/ui/rating'
import { TableComponents } from '@/components/ui/table/table-components'
import { Typography } from '@/components/ui/typography'
import { ButtonCards } from '@/features/cards/buttonCards'
import { Card } from '@/pages/cards/api/cards-types'

import s from './card.module.scss'

export const CardRow = (props: PropsType) => {
  const { card, deckId, isMyDeck } = props

  return (
    <TableComponents.Row key={card.id}>
      <TableComponents.Cell>
        <div className={s.divNameBody}>
          {card.questionImg ? (
            <img alt={'img'} height={50} src={card.questionImg} width={70} />
          ) : (
            <div className={s.img}>
              <img alt={'img'} height={50} src={NoPhoto} width={50} />
            </div>
          )}
          <Typography className={s.typographyStyleBody} variant={'body2'}>
            {card.question}
          </Typography>
        </div>
      </TableComponents.Cell>
      <TableComponents.Cell>
        <div className={s.divNameBody}>
          {card.answerImg ? (
            <img alt={'img'} height={50} src={card.answerImg} width={70} />
          ) : (
            <div className={s.img}>
              <img alt={'img'} height={50} src={NoPhoto} width={50} />
            </div>
          )}
          <Typography className={s.typographyStyleBody} variant={'body2'}>
            {card.answer}
          </Typography>
        </div>
      </TableComponents.Cell>
      <TableComponents.Cell className={s.update}>
        <Typography className={s.typographyStyleBody} variant={'body2'}>
          {new Date(card.updated).toLocaleDateString('ru-RU')}
        </Typography>
      </TableComponents.Cell>
      <TableComponents.Cell className={s.grade}>
        <Typography className={s.typographyStyleBody} variant={'body2'}>
          <Rating defaultValue={card.grade} />
        </Typography>
      </TableComponents.Cell>
      {isMyDeck && (
        <TableComponents.Cell>
          <div className={s.control}>
            <ButtonCards card={card} deckId={deckId} />
          </div>
        </TableComponents.Cell>
      )}
    </TableComponents.Row>
  )
}

type PropsType = {
  card: Card
  deckId: string
  isMyDeck: boolean
}
