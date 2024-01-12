import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  placeholder?: string
  title?: string
  type?: 'default' | 'password' | 'search'
  errorMessage?: string
}

export const InputControl = (props: InputProps) => {
  const { placeholder, title, type=  'default', errorMessage} = props
  const classNames = clsx(s.input, s[type], s[errorMessage ? 'error' : ''])

  return (
    <div>
      <Typography variant={'body2'}>{title}</Typography>
      <input className={classNames} placeholder={placeholder} type={type}/>
      {errorMessage ? <Typography variant={'link2'}>{errorMessage}</Typography> : ''}
    </div>
  )
}
