import type { Meta } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { ControlledSelect } from '@/controlled/controled-select/controlled-select'

const options = [
  { label: 'Science', value: '1' },
  { label: 'Sports', value: '2' },
  { label: 'Movie', value: '3' },
  { label: 'Technology', value: '4' },
  { label: 'Music', value: '5' },
]

type FormValues = Record<string, any>

export const ExampleSelectForm = () => {
  const { control, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography style={{ marginLeft: '10px' }} variant={'h3'}>
        Controlled Select
      </Typography>
      <div style={{ margin: '10px 0' }}>
        <ControlledSelect control={control} name={'selected value'} options={options} />
      </div>
      <Button style={{ marginLeft: '1px' }} variant={'link'}>
        Click me after selecting value
      </Button>
    </form>
  )
}

const meta = {
  component: ControlledSelect,
  title: 'Controlled/ControlledSelect',
} satisfies Meta<typeof ControlledSelect>

export default meta
