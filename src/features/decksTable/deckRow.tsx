import NoPhoto from '@/assets/icons/NoPhoto.png'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { TableComponents } from '@/components/ui/table/table-components'
import { Typography } from '@/components/ui/typography'
import { Deck } from '@/pages/decks/api/decks-types'

import s from './deck.module.scss'

type PropsType = {
  deck: Deck
}

export const DeckRow = (props: PropsType) => {
  const { deck } = props

  return (
    <TableComponents.Row key={deck.id}>
      <TableComponents.Cell>
        <Button onClick={() => alert('Здесь должен быть роут колоды')} variant={'pure'}>
          <div className={s.divNameBody}>
            {deck.cover ? (
              <img alt={'img'} height={50} src={deck.cover} width={70} />
            ) : (
              <div className={s.img}>
                <img alt={'img'} height={50} src={NoPhoto} width={50} />
              </div>
            )}
            <Typography className={s.typographyStyle} variant={'body2'}>
              {deck.name}
            </Typography>
          </div>
        </Button>
      </TableComponents.Cell>
      <TableComponents.Cell>
        <Typography className={s.typographyStyleBody} variant={'body2'}>
          {deck.cardsCount}
        </Typography>
      </TableComponents.Cell>
      <TableComponents.Cell>
        <Typography className={s.typographyStyleBody} variant={'body2'}>
          {new Date(deck.updated).toLocaleDateString('ru-RU')}
        </Typography>
      </TableComponents.Cell>
      <TableComponents.Cell>
        <Typography className={`${s.typographyStyle} ${s.createdBy}`} variant={'body2'}>
          {deck.author.name}
        </Typography>
      </TableComponents.Cell>
      <TableComponents.Cell>
        <div className={s.control}>
          <Button className={s.button} onClick={() => alert('play')} variant={'pure'}>
            <Icon height={'16px'} iconId={'Learn'} width={'16px'} />
          </Button>
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
