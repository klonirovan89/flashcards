import s from './typography.module.scss'

export type TypographyProps = {
  value: string
  variant:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
}

export const Typography = (props: TypographyProps) => {
  const { value, variant } = props

  return (
    <div className={s.typography}>
      <div className={s[variant]}>{value}</div>
    </div>
  )
}
