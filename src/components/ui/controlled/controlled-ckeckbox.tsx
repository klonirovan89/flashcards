import React from 'react'
import { useController } from 'react-hook-form'

import { UseControllerProps } from 'react-hook-form/dist/types'

import { Checkbox, PropsType } from '../checkbox/checkbox'

type Props = Omit<UseControllerProps<any>, 'defaultValue' | 'disabled' | 'rules'> &
  Omit<PropsType, 'checked' | 'onValueChange'>
export const ControlledCheckbox = ({ control, name, shouldUnregister, ...rest }: Props) => {
  const {
    field: { onBlur, onChange, value },
  } = useController({
    control,
    disabled: rest.disabled,
    name: rest.label,
    shouldUnregister,
  })

  return <Checkbox {...rest} checked={value} onChange={onChange} />
}