import s from './card.module.scss'
import {Typography} from "@/components/ui/typography";

export type CardProps = {
  children: string
}

export const Card = (props: CardProps) => {
  return (
      <div className={s.card}>
        <Typography className={s.typographyStyle} variant={'body2'}>{props.children}</Typography>
      </div>
  )

}
