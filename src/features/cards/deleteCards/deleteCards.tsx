import { useState } from 'react'

import { Button } from '@/components/ui/button/button'
import { FormButtons } from '@/components/ui/form-buttons'
import { Icon } from '@/components/ui/icon/Icon'
import { SuperModal } from '@/components/ui/modal'
import {Card} from "@/pages/cards/api/cards-types";
import {useDeleteCardsMutation} from "@/pages/cards/api/cards-api";

export const DeleteCards = (props: PropsType) => {
  const { className, card } = props

  const [open, setOpen] = useState(false)

  const [cardApi] = useDeleteCardsMutation()

  const deleteDeck = async () => {
    await cardApi({ id: card.id })
      .unwrap()
      .catch(e => {
        console.log(e.data.message)
      })
    setOpen(false)
  }

  return (
    <>
      <SuperModal
        changeModalState={() => setOpen(!open)}
        open={open}
        title={'Delete Card'}
        withTrigger={false}
      >
        Do you really want to remove this card?
        <FormButtons
          callback={deleteDeck}
          changeModalState={() => setOpen(!open)}
          primaryButtonText={'Delete Card'}
          withSecondary
        />
      </SuperModal>
      <Button className={className} onClick={() => setOpen(!open)} variant={'pure'}>
        <Icon height={'16px'} iconId={'Delete'} width={'16px'} />
      </Button>
    </>
  )
}

type PropsType = {
  className: string
  card: Card
}
