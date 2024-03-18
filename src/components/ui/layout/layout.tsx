import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header'
import { useLogoutMutation, useMeQuery } from '@/pages/auth/api/auth-api'

import s from './layout.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
  contentMarginTop?: CSSProperties['marginTop']
}
export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, contentMarginTop = '36px', ...rest }, ref) => {
    const { data, isError, isLoading } = useMeQuery()
    const [signOut] = useLogoutMutation()
    const isAuthenticated = !isError && !isLoading

    return (
      <div ref={ref} {...rest}>
        <Header
          avatar={data?.avatar ?? ''}
          email={data?.email ?? ''}
          isLoggedIn={isAuthenticated}
          logout={signOut}
          userName={data?.name ?? ''}
        />
        <Outlet />
        <main className={s.main}>{children}</main>
      </div>
    )
  }
)
