import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledRadioGroup } from '@/controlled/controlled-radio-group'

import s from './rateCard.module.scss'

export const RateCard = (props: PropsType) => {
  const { onSubmit } = props

  const options: Option[] = [
    { label: 'Did not know', value: '1' },
    { label: 'Forgot', value: '2' },
    { label: 'A lot of thought', value: '3' },
    { label: 'Confused', value: '4' },
    { label: 'Knew the answer', value: '5' },
  ]

  const { control, handleSubmit } = useForm<RateType>({
    defaultValues: { grade: '1' },
  })

  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.radioGroup}>
        <ControlledRadioGroup control={control} disabled={false} name={'grade'} options={options} />
      </div>
      <Button className={s.button} fullWidth>
        Next Question
      </Button>
    </form>
  )
}

type PropsType = {
  onSubmit: (data: RateType) => void
}

export type Option = {
  label: string
  value: string
}

export type RateType = { grade: string }
