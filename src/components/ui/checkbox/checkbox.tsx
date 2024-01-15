import { Checkbox } from '@mui/material'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  onValueChange: () => void
  checked?: boolean
  disabled?: boolean
  label: string
  variant?: string
}

export const CheckboxControl = (props: CheckboxProps) => {
  const { checked, disabled, label, variant = 'unchecked', onValueChange } = props

  return (
    <div className={s.checkbox}>
      <Checkbox checked={checked} className={s[variant]} disabled={disabled} onChange={onValueChange}/>
      <div>{label}</div>
    </div>
  )
}
