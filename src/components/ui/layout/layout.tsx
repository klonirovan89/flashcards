import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Header } from '@/components/ui/header'

import s from './layout.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
  contentMarginTop?: CSSProperties['marginTop']
}
export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, contentMarginTop = '36px', ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <Header
          isLogin
          title={'Sign Out'}
          userData={{
            avatar: {
              id: 'avatar_id',
              image: 'https://example.com/avatar.png',
            },
            email: 'alexr@example.com',
            name: 'Alex Dolton',
          }}
          value={[
            { id: '1', label: 'My Profile' },
            { id: '2', label: 'Sign Out' },
          ]}
        />
        <main className={s.main}>{children}</main>
      </div>
    )
  }
)
