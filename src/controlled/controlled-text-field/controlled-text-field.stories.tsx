import type { Meta } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'

type FormValues = Record<string, any>

export const ExampleCheckboxForm = () => {
  const { control, getValues, handleSubmit, register } = useForm<FormValues>()
  const onSubmit = () => {
    alert(JSON.stringify(getValues()))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ margin: '20px 30px' }}>
        <Typography variant={'h3'}>Controlled TextArea</Typography>
        <div style={{ marginBottom: '20px', marginTop: '20px', width: '300px' }}>
          <ControlledTextField control={control} defaultValue={'Controlled'} name={'Controlled'} />
        </div>
        <div style={{ marginBottom: '20px', width: '300px' }}>
          <TextField {...register('No Controlled')} defaultValue={'Dont Change'} />
        </div>
        <Button variant={'link'}>Click me for promotion</Button>
      </div>
    </form>
  )
}

const meta = {
  component: ControlledTextField,
  title: 'Controlled/ControlledTextField',
} satisfies Meta<typeof ControlledTextField>

export default meta
