import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Icon } from '@/components/ui/icon/Icon'
import { Options } from '@/components/ui/radio-group'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from '../select/select.module.scss'

export const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>((props, ref) => {
  const { disabled, handleSelectChange, isPagination, label, options, selectedValue, value } = props

  return (
    <div className={s.container}>
      {label && <Typography variant={'body2'}>{label}</Typography>}
      <RadixSelect.Root
        defaultValue={selectedValue}
        onValueChange={value => handleSelectChange(value)}
        value={value}
      >
        <RadixSelect.Trigger
          className={clsx(s.trigger, isPagination && s.pagination)}
          disabled={disabled}
          ref={ref}
        >
          <RadixSelect.Value placeholder={selectedValue} />
          <div className={s.arrow}>
            <Icon height={'16px'} iconId={'Arrow'} width={'16px'} />
          </div>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content position={'popper'} sideOffset={-1}>
            <RadixSelect.Viewport className={clsx(s.viewport, isPagination && s.pagination)}>
              {options.map((el, index) => (
                <RadixSelect.Item
                  className={clsx(s.item, isPagination && s.pagination)}
                  key={index}
                  value={el.label}
                >
                  <RadixSelect.ItemText>
                    <Typography className={s.typographyStyle} variant={'body2'}>
                      {el.label}
                    </Typography>
                  </RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  )
})

export type SelectProps = {
  disabled?: boolean
  handleSelectChange: (value: string) => void
  isPagination?: boolean
  label?: string
  options: Options[]
  selectedValue?: string
  value?: string
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>
