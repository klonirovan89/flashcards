import s from './card.module.scss'

export type CardProps = {
  children: string
}

export const Card = (props: CardProps) => {
  return <div className={s.card}>{props.children}</div>
}
