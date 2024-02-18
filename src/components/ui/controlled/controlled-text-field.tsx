import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFiledProps } from '../text-field'

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<TextFiledProps, 'onChange' | 'onValueChange' | 'value'>
export const ControlledTextField = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const { field } = useController({
    control,
    disabled: rest.disabled,
    name: rest.name,
    shouldUnregister,
  })

  return <TextField {...rest} {...field} />
}
