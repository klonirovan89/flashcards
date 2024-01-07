import { Checkbox } from '@mui/material'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  disabled: boolean
  value: string
  variant: string
}

export const CheckboxControl = (props: CheckboxProps) => {
  const { checked, disabled, value, variant } = props

  return (
    <div className={s.checkbox}>
      <Checkbox checked={checked} className={s[variant]} disabled={disabled} />
      <div>{value}</div>
    </div>
  )
}
