import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { FileUploaderWithImage } from '@/components/ui/file-uploader-with-image-block'
import { FormButtons } from '@/components/ui/form-buttons'
import { TextField } from '@/components/ui/text-field/text-field'
import { ControlledCheckbox } from '@/controlled/controlled-ckeckbox/controlled-ckeckbox'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { useCreateDecksMutation } from '@/pages/decks/api/decks-api'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import c from './AddNewDeckForm.module.scss'

const newDeckSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string().min(3).max(100),
})

type newDeckArgTypes = z.infer<typeof newDeckSchema>

export const AddNewDeckForm = ({ changeModalState, withSecondary }: AddNewDeckFormProps) => {
  const [cover, setCover] = useState<File | null>(null)

  const [createDeck] = useCreateDecksMutation()

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<newDeckArgTypes>({
    defaultValues: {
      isPrivate: false,
      name: '',
    },
    resolver: zodResolver(newDeckSchema),
  })

  const handleSetCover = (file: File) => {
    setCover(file)
  }

  const onSubmit = (data: newDeckArgTypes) => {
    createDeck({ ...data, cover })
  }

  return (
    <div className={c.wrapper}>
      <form className={c.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          defaultValue={'check'}
          errorMessage={errors.name?.message}
          label={'Pack Name'}
          name={'name'}
        />
        <FileUploaderWithImage
          handleSetCover={handleSetCover}
          name={'cover'}
          text={'Change Cover'}
        />
        <ControlledCheckbox control={control} label={'Private pack'} name={'isPrivate'} />
        <FormButtons
          changeModalState={changeModalState}
          primaryButtonText={'Add New Deck'}
          withSecondary={withSecondary}
        />
      </form>
    </div>
  )
}

type AddNewDeckFormProps = {
  changeModalState: (open: boolean) => void
  withSecondary?: boolean
}
