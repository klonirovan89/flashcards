import { ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'

import s from './buttonWithIcon.module.scss'

export const ButtonWithIcon = (props: PropsType) => {
  const { disabled, fullWidth, height, iconId, text, variant = 'primary', width, ...rest } = props

  return (
    <Button disabled={disabled} fullWidth={fullWidth} variant={variant} {...rest}>
      <div className={`${s.container} ${disabled ? s.disabled : ''}`}>
        {iconId && (
          <Icon height={height ? height : '16px'} iconId={iconId} width={width ? width : '16px'} />
        )}
        {text ? <Typography variant={'subtitle2'}>{text}</Typography> : ''}
      </div>
    </Button>
  )
}

type PropsType = {
  fullWidth?: boolean
  height?: string
  iconId?: string
  text?: string
  variant?: 'primary' | 'secondary'
  width?: string
} & ComponentPropsWithoutRef<'button'>
