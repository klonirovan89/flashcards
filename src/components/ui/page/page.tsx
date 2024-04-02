import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'
type Props = ComponentPropsWithoutRef<'div'> & {
  mb?: CSSProperties['marginBottom']
  mt?: CSSProperties['marginTop']
}
export const Page = ({ children, className, mb = '30px', mt = '96px', style, ...rest }: Props) => {
  const classes = clsx(className, s.container)
  const styles = { marginBottom: mb, marginTop: mt, ...style } satisfies CSSProperties

  return (
    <div className={classes} style={styles} {...rest}>
      {children}
    </div>
  )
}
