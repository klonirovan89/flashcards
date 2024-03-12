import NoPhoto from '@/assets/icons/NoPhoto.png'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Rating } from '@/components/ui/rating'
import { TableComponents } from '@/components/ui/table/table-components'
import { Typography } from '@/components/ui/typography'
import { Card } from '@/pages/cards/api/cards-types'

import s from './card.module.scss'

type PropsType = {
  card: Card
}

export const CardRow = (props: PropsType) => {
  const { card } = props

  return (
    <TableComponents.Row key={card.id}>
      <TableComponents.Cell className={s.cell}>
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
      <TableComponents.Cell className={s.cell}>
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
      <TableComponents.Cell>
        <div className={s.control}>
          <Button className={s.button} onClick={() => alert('play')} variant={'pure'}>
            <Icon height={'16px'} iconId={'Edit'} width={'16px'} />
          </Button>
          <Button className={s.button} onClick={() => alert('play')} variant={'pure'}>
            <Icon height={'16px'} iconId={'Delete'} width={'16px'} />
          </Button>
        </div>
      </TableComponents.Cell>
    </TableComponents.Row>
  )
}
