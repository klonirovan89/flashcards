import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { FileUploaderWithImage } from '@/components/ui/file-uploader-with-image-block'
import { FormButtons } from '@/components/ui/form-buttons'
import { ControlledCheckbox } from '@/controlled/controlled-ckeckbox/controlled-ckeckbox'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { CreateDecksArgs, Deck } from '@/pages/decks/api/decks-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import c from './deckForm.module.scss'

const newDeckSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string().min(3).max(100),
})

export const DeckForm = ({
  changeModalState,
  createNewDeck,
  deck,
  text,
  withSecondary,
}: AddNewDeckFormProps) => {
  const [cover, setCover] = useState<File | null>(null)
  const [sendCover, setSendCover] = useState<boolean>(false)

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<newDeckArgTypes>({
    defaultValues: {
      isPrivate: false,
      name: deck?.name || '',
    },
    resolver: zodResolver(newDeckSchema),
  })

  const handleSetCover = (file: File | null) => {
    setCover(file)
    setSendCover(true)
  }

  const onSubmit = (data: newDeckArgTypes) => {
    createNewDeck({ ...data, cover, sendCover })
    changeModalState()
  }

  return (
    <div className={c.wrapper}>
      <form className={c.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          errorMessage={errors.name?.message}
          label={'Deck Name'}
          name={'name'}
        />
        <FileUploaderWithImage cover={deck?.cover} handleSetCover={handleSetCover} name={'cover'} />
        <ControlledCheckbox control={control} label={'Private pack'} name={'isPrivate'} />
        <FormButtons
          changeModalState={changeModalState}
          primaryButtonText={text}
          withSecondary={withSecondary}
        />
      </form>
    </div>
  )
}

type AddNewDeckFormProps = {
  changeModalState: () => void
  createNewDeck: (newDeck: CreateDecksArgs) => void
  deck?: Deck
  text: string
  withSecondary?: boolean
}

export type newDeckArgTypes = z.infer<typeof newDeckSchema>
