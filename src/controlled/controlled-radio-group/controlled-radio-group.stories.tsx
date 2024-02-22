import type { Meta } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { ControlledRadioGroup } from '@/controlled/controlled-radio-group/controlled-radio-group'

const options = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
  { label: 'Other', value: 'Other' },
]

type FormValues = Record<string, any>

export const ExampleRadioGroupForm = () => {
  const { control, getValues, handleSubmit } = useForm<FormValues>()

  const onSubmit = () => {
    alert(JSON.stringify(getValues()))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography style={{ marginLeft: '10px' }} variant={'h3'}>
        Controlled Select
      </Typography>
      <div style={{ margin: '30px 10px' }}>
        <ControlledRadioGroup
          control={control}
          disabled={false}
          name={'selected value'}
          options={options}
        />
      </div>
      <Button style={{ marginLeft: '1px' }} variant={'link'}>
        Click me after selecting value
      </Button>
    </form>
  )
}

const meta = {
  component: ControlledRadioGroup,
  title: 'Controlled/ControlledRadioGroup',
} satisfies Meta<typeof ControlledRadioGroup>

export default meta
