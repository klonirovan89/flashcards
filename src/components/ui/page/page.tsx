import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'
type Props = ComponentPropsWithoutRef<'div'> & {
  mt?: CSSProperties['marginTop']
}
export const Page = ({ children, className, mt = '33px', style, ...rest }: Props) => {
  const classes = clsx(className, s.container)
  const styles = { marginTop: mt, ...style } satisfies CSSProperties

  return (
    <div className={classes} style={styles} {...rest}>
      {children}
    </div>
  )
}
