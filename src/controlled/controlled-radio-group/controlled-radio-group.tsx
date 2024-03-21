import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group'

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, ref, value },
    fieldState: { error },
  } = useController({
    control,
    disabled: rest.disabled,
    name: name,
  })

  return (
    <RadioGroup
      errorMessage={error?.message}
      onValueChange={onChange}
      selectedValue={value}
      value={value}
      {...rest}
      ref={ref}
      options={rest.options}
    />
  )
}

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<RadioGroupProps, 'onValueChange' | 'value'>
