import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>
export const Card = (props: CardProps) => {
  const { children, className } = props
  const classes = clsx(s.card, className)

  return <div className={classes}>{children}</div>
}
