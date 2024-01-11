import { Typography } from '@/components/ui/typography'
import { Input } from '@mui/material'
import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  placeholder: string
  title: string
  type?: string
  variant: 'input'
}

export const InputControl = (props: InputProps) => {
  const { placeholder, title, variant } = props
  const classNames = clsx(s.input, s[variant])

  return (
    <div>
      <Typography variant={'body2'}>{title}</Typography>
      <Input className={classNames} placeholder={placeholder} />
    </div>
  )
}
