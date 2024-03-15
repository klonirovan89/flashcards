import { ComponentPropsWithoutRef } from 'react'

import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>
export const Card = (props: CardProps) => {
  const { children, className } = props

  return <div className={s.card + ` ${className ? className : ''}`}>{children}</div>
}
