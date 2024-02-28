import { ComponentPropsWithoutRef } from 'react'

import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>
export const Card = (props: CardProps) => {
  const { children } = props

  return <div className={s.card}>{children}</div>
}
