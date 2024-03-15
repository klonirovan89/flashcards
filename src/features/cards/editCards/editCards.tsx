import { useState } from 'react'

import { Button } from '@/components/ui/button/button'
import { Icon } from '@/components/ui/icon/Icon'
import { SuperModal } from '@/components/ui/modal'
import {CardForm} from "@/components/forms/cardForm";
import {Card, FormDataCards} from "@/pages/cards/api/cards-types";
import {useUpdateCardsMutation} from "@/pages/cards/api/cards-api";

export const EditCards = (props: PropsType) => {
  const { className, card, deckId } = props

  const [open, setOpen] = useState<boolean>(false)

  const [cardAPI] = useUpdateCardsMutation()

  const changeModalState = () => {
    setOpen(!open)
  }

  const editCard = ( newCard: FormDataCards) => {
      cardAPI( newCard )
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
        title={'Edit Deck'}
        withTrigger={false}
      >
        <CardForm
          changeModalState={changeModalState}
          createNewCard={editCard}
          card={card}
          text={'Edit Deck'}
          withSecondary
          deckId={deckId}
        />
      </SuperModal>
      <Button className={className} onClick={() => setOpen(!open)} variant={'pure'}>
        <Icon height={'16px'} iconId={'Edit'} width={'16px'} />
      </Button>
    </>
  )
}

type PropsType = {
  className: string
  card: Card
  deckId: string
}
