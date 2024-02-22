import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, PropsType } from '@/components/ui/checkbox'

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<PropsType, 'checked' | 'onChange'>
export const ControlledCheckbox = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({
    control,
    disabled: rest.disabled,
    name: rest.name,
    shouldUnregister,
  })

  return <Checkbox checked={value} onBlur={onBlur} onChange={onChange} ref={ref} {...rest} />
}
