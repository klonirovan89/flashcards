import type { Meta } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Typography } from '@/components/ui/typography'
import { ControlledCheckbox } from '@/controlled/controlled-ckeckbox/controlled-ckeckbox'

type FormValues = Record<string, any>

export const ExampleCheckboxForm = () => {
  const { control, getValues, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      controlledCheckbox: true,
    },
  })
  const onSubmit = () => {
    alert(JSON.stringify(getValues()))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography style={{ marginLeft: '10px' }} variant={'h3'}>
        Controlled Checkbox
      </Typography>
      <div style={{ padding: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <ControlledCheckbox control={control} label={'controlled'} name={'controlledCheckbox'} />
        </div>

        <Checkbox checked={false} label={'dont controlled'} name={'dont controlled'} />
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
