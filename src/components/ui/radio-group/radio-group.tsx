import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  (props, ref) => {
    const { disabled, errorMessage, options, selectedValue, ...rest } = props

    return (
      <RadixRadioGroup.Root
        className={s.root}
        defaultValue={'default'}
        disabled={disabled}
        {...rest}
        ref={ref}
      >
        {options.map(el => (
          <div className={s.container} key={el.value}>
            <RadixRadioGroup.Item
              checked={el.value === selectedValue}
              className={s.item}
              value={el.value}
            >
              <div className={s.frame} />
              <RadixRadioGroup.Indicator className={s.indicator} />
            </RadixRadioGroup.Item>
            <Typography className={disabled ? s.typographyDisabled : ''} variant={'body2'}>
              {el.label}
            </Typography>
          </div>
        ))}
        {errorMessage && (
          <Typography className={s.error} variant={'body2'}>
            {errorMessage}
          </Typography>
        )}
      </RadixRadioGroup.Root>
    )
  }
)

export type RadioGroupProps = {
  disabled: boolean
  errorMessage?: string
  onValueChange?: (value: string) => void
  options: Options[]
  selectedValue?: string
} & ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>

export type Options = {
  label: string
  value: string
}
