import { ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'

import s from './buttonWithIcon.module.scss'

export const ButtonWithIcon = (props: PropsType) => {
  const { disabled, fullWidth, iconId, text, variant = 'primary', ...rest } = props

  return (
    <Button disabled={disabled} fullWidth={fullWidth} variant={variant} {...rest}>
      <div className={`${s.container} ${disabled ? s.disabled : ''}`}>
        {iconId && <Icon disabled={disabled} height={'16px'} iconId={iconId} width={'16px'} />}
        {text ? text : ''}
      </div>
    </Button>
  )
}

type PropsType = {
  fullWidth?: boolean
  iconId?: string
  text?: string
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>
