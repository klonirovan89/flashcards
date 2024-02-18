import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export const Checkbox = forwardRef<HTMLButtonElement, PropsType>((props, ref) => {
  const { checked, disabled, id, label, onChange } = props

  return (
    <div className={s.container}>
      <RadixCheckbox.Root
        checked={checked}
        className={s.root}
        defaultChecked
        disabled={disabled}
        id={id}
        onCheckedChange={onChange}
        ref={ref}
      >
        <RadixCheckbox.Indicator className={s.indicator}>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <div className={disabled ? s.typographyDisabled : ''}>
        {label && <Typography variant={'body2'}>{label}</Typography>}
      </div>
    </div>
  )
})

export type PropsType = {
  checked: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange?: () => void
} & ComponentPropsWithoutRef<'button'>
