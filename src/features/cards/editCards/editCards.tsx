import { useState } from 'react'

import { CardForm } from '@/components/forms/cardForm'
import { Button } from '@/components/ui/button/button'
import { Icon } from '@/components/ui/icon/Icon'
import { SuperModal } from '@/components/ui/modal'
import { useUpdateCardsMutation } from '@/pages/cards/api/cards-api'
import { Card, FormDataCards } from '@/pages/cards/api/cards-types'

export const EditCards = (props: PropsType) => {
  const { card, className, deckId } = props

  const [open, setOpen] = useState<boolean>(false)

  const [cardAPI] = useUpdateCardsMutation()

  const changeModalState = () => {
    setOpen(!open)
  }

  const editCard = (newCard: FormDataCards) => {
    cardAPI(newCard)
      .unwrap()
      .catch(e => {
        console.log(e.data.message)
      })
  }

  return (
    <>
      <SuperModal
        changeModalState={changeModalState}
        open={open}
        title={'Edit Card'}
        withTrigger={false}
      >
        <CardForm
          card={card}
          changeModalState={changeModalState}
          createNewCard={editCard}
          deckId={deckId}
          text={'Edit Card'}
          withSecondary
        />
      </SuperModal>
      <Button className={className} onClick={() => setOpen(!open)} variant={'pure'}>
        <Icon height={'16px'} iconId={'Edit'} width={'16px'} />
      </Button>
    </>
  )
}

type PropsType = {
  card: Card
  className: string
  deckId: string
}
