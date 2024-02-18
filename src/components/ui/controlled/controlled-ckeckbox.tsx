import { UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, PropsType } from '../checkbox/checkbox'

type Props = Omit<UseControllerProps<any>, 'defaultValue' | 'disabled' | 'rules'> &
  Omit<PropsType, 'checked' | 'onValueChange'>
export const ControlledCheckbox = ({ control, name, shouldUnregister, ...rest }: Props) => {
  const {
    field: { onBlur, onChange, value },
  } = useController({
    control,
    disabled: rest.disabled,
    name: name,
    shouldUnregister,
  })

  return <Checkbox {...rest} checked={value} onBlur={onBlur} onChange={onChange} />
}
