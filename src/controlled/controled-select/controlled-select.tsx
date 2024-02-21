import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Select, SelectProps } from '@/components/ui/select'

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<SelectProps, 'handleSelectChange' | 'value'>
export const ControlledSelect = <T extends FieldValues>({ control, ...rest }: Props<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    disabled: rest.disabled,
    name: rest.name,
  })

  return <Select handleSelectChange={onChange} value={value} {...rest} ref={ref} />
}
