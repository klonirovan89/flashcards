import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { FileUploaderWithImage } from '@/components/ui/file-uploader-with-image-block'
import { FormButtons } from '@/components/ui/form-buttons'
import { Select } from '@/components/ui/select'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { Card, FormDataCards } from '@/pages/cards/api/cards-types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import c from './cardForm.module.scss'

const newCardSchema = z.object({
  answer: z.string().min(3).max(100),
  question: z.string().min(3).max(100),
})

export const CardForm = (props: PropsType) => {
  const { card, changeModalState, createNewCard, withSecondary } = props
  const options = [
    {
      label: 'Text',
      value: 'Text',
    },
    {
      label: 'Picture',
      value: 'Picture',
    },
  ]

  const [selectValue, setSelectValue] = useState<string>('Text')
  const [questionCover, setQuestionCover] = useState<File | null>(null)
  const [answerCover, setAnswerCover] = useState<File | null>(null)

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<newCardArgTypes>({
    defaultValues: {
      answer: card?.answer,
      question: card?.question,
    },
    resolver: zodResolver(newCardSchema),
  })

  const handleSetQuestionCover = (file: File) => {
    setQuestionCover(file)
  }

  const handleSetAnswerCover = (file: File) => {
    setAnswerCover(file)
  }

  const onSubmit = (data: newCardArgTypes) => {
    const newData = {
      answer: data.answer,
      answerImg: answerCover,
      question: data.question,
      questionImg: questionCover,
    }

    createNewCard({ data: newData, id: 'cltr8wl2v00gqth2gzpmhxzf8' })
    changeModalState()
  }

  return (
    <div className={c.wrapper}>
      <form className={c.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <Select
          handleSelectChange={value => setSelectValue(value)}
          label={'Choose A Question Format'}
          options={options}
          selectedValue={selectValue}
          fullWidth
        />
        <div className={c.formRow}>
          <ControlledTextField
            control={control}
            errorMessage={errors.answer?.message}
            label={'Question'}
            name={'question'}
          />
          {selectValue === 'Picture' && (
            <FileUploaderWithImage
              cover={card?.questionImg}
              handleSetCover={handleSetQuestionCover}
              name={'questionImg'}
            />
          )}
        </div>
        <div className={c.formRow}>
          <ControlledTextField
            control={control}
            errorMessage={errors.question?.message}
            label={'Answer'}
            name={'answer'}
          />
          {selectValue === 'Picture' && (
            <FileUploaderWithImage
              cover={card?.answerImg}
              handleSetCover={handleSetAnswerCover}
              name={'answerImg'}
            />
          )}
        </div>
        <FormButtons
          changeModalState={changeModalState}
          primaryButtonText={'Add New Card'}
          withSecondary={withSecondary}
        />
      </form>
    </div>
  )
}

type PropsType = {
  card?: Card
  changeModalState: () => void
  createNewCard: (newCard: FormDataCards) => void
  withSecondary?: boolean
}

export type newCardArgTypes = z.infer<typeof newCardSchema>
