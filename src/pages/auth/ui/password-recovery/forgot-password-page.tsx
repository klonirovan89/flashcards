import { Link, useNavigate } from 'react-router-dom'

import { ForgotPassword, FormValuesRecoveryPassword } from '@/components/auth/forgot-password'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { usePasswordRecoveryMutation } from '@/pages/auth/api/auth-api'
import { html } from '@/pages/auth/ui/password-recovery/utils/message-to-email-html'

import s from '@/components/auth/forgot-password/forgot-password.module.scss'
import { Page } from '@/components/ui/page/page'

export const ForgotPasswordPage = () => {
  const [recoveryPassword] = usePasswordRecoveryMutation()
  const navigate = useNavigate()
  const handleForgotPassword = async (data: FormValuesRecoveryPassword) => {
    recoveryPassword({
      email: data.email,
      html,
    })
    navigate(`/check-email/${data.email}`)
  }

  return (
    <Page>
      <Card>
        <div className={s.section}>
          <Typography variant={'h1'}>Forgot your password?</Typography>
          <ForgotPassword className={s.form} onSubmit={handleForgotPassword} />
          <div className={s.typographyStyle}>
            <Typography variant={'body2'}>Did you remember your password?</Typography>
            <Typography as={Link} to={'/login'} variant={'subtitle1'}>
              Try logging in
            </Typography>
          </div>
        </div>
      </Card>
    </Page>
  )
}
