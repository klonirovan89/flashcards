import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, PropsType>(
  (props, ref) => {
    const { id, label, onChange, ...rest } = props

    return (
      <label>
        <div className={s.container}>
          <div className={s.pseudo} />
          <RadixCheckbox.Root
            checked={rest.checked}
            className={s.root}
            defaultChecked={rest.defaultChecked}
            disabled={rest.disabled}
            id={id}
            onCheckedChange={onChange}
            ref={ref}
          >
            <RadixCheckbox.Indicator className={s.indicator}>
              <CheckIcon />
            </RadixCheckbox.Indicator>
          </RadixCheckbox.Root>
          <div className={rest.disabled ? s.typographyDisabled : ''}>
            {label && <Typography variant={'body2'}>{label}</Typography>}
          </div>
        </div>
      </label>
    )
  }
)

export type PropsType = {
  checked: boolean
  id?: string
  label?: string
  onChange?: () => void
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>
