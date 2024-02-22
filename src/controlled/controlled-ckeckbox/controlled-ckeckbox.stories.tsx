import type { Meta } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Typography } from '@/components/ui/typography'
import { ControlledCheckbox } from '@/controlled/controlled-ckeckbox/controlled-ckeckbox'

type FormValues = Record<string, any>

export const ExampleCheckboxForm = () => {
  const { control, getValues, handleSubmit, register } = useForm<FormValues>({
    defaultValues: {
      controlledCheckbox: false,
    },
  })
  const onSubmit = () => {
    alert(JSON.stringify(getValues()))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography style={{ marginLeft: '10px' }} variant={'h3'}>
        Controlled
      </Typography>
      <div style={{ padding: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <ControlledCheckbox control={control} name={'controlledCheckbox'} />
        </div>
        <Typography variant={'h3'}>Uncontrolled</Typography>
        <div style={{ marginTop: '10px' }}>
          <Checkbox
            {...register('Uncontrolled')}
            checked={false}
            name={'dont controlled'}
            onChange={() => getValues()}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <Button variant={'link'}>Click me for promotion</Button>
        </div>
      </div>
    </form>
  )
}

const meta = {
  component: ControlledCheckbox,
  title: 'Controlled/ControlledCheckbox',
} satisfies Meta<typeof ControlledCheckbox>

export default meta
