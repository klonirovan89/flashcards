import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn } from '@/components/auth/sign-in'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useLoginMutation } from '@/pages/auth/api/auth-api'
import { LoginArgs } from '@/pages/auth/api/auth-types'

import s from '@/components/auth/sign-in/sign-in.module.scss'
import { Page } from '@/components/ui/page/page'

export const LoginPage = () => {
  const [signIn] = useLoginMutation()
  const navigate = useNavigate()
  const handleSignIn = (data: LoginArgs) => {
    signIn(data)
      .unwrap()
      .then(() => {
        toast.success('You are successfully authorized', { containerId: 'appId' })
        navigate('/')
      })
      .catch(err => {
        toast.error(err?.data?.message ?? 'Could not sign in', { containerId: 'appId' })
      })
  }

  return (
    <Page>
      <Card>
        <div className={s.section}>
          <Typography variant={'h1'}>Sign In</Typography>
          <SignIn className={s.form} onSubmit={handleSignIn}>
            <div className={s.linkStyle}>
              <Typography
                as={Link}
                className={s.typographyLinkStyle}
                to={'/recover-password'}
                variant={'body2'}
              >
                Forgot Password?
              </Typography>
            </div>
          </SignIn>
          <div className={s.typographyStyle}>
            <Typography variant={'body2'}>Don&apos;t have an account?</Typography>
            <Typography as={Link} to={'/sign-up'} variant={'subtitle1'}>
              Sign Up
            </Typography>
          </div>
        </div>
      </Card>
    </Page>
  )
}
