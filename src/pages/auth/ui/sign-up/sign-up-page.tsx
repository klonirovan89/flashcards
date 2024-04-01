import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { FormValuesSignUp, SignUp } from '@/components/auth/sign-up'
import { Card } from '@/components/ui/card'
import { QueryLoader } from '@/components/ui/loader/qeryLoader'
import { Page } from '@/components/ui/page/page'
import { Typography } from '@/components/ui/typography'
import { useSignUpMutation } from '@/pages/auth/api/auth-api'

import s from '@/components/auth/sign-up/sign-up.module.scss'

export const SignUpPage = () => {
  const [signUp, { isLoading }] = useSignUpMutation()
  const navigate = useNavigate()

  if (isLoading) {
    return <QueryLoader />
  }
  const handleSignUpPage = async (data: FormValuesSignUp) => {
    try {
      await signUp({ email: data.email, password: data.password }).unwrap()

      toast.success('You are successfully signed up', { containerId: 'appId' })
    } catch (e: any) {
      toast.error(e.data.errorMessages[0], { containerId: 'appId' })
    }
    navigate('/login')
  }

  return (
    <Page>
      <Card>
        <div className={s.section}>
          <Typography variant={'h1'}>Sign Up</Typography>
          <SignUp className={s.form} onSubmit={handleSignUpPage}>
            <div className={s.typographyStyle}>
              <Typography variant={'body2'}>Already have an account?</Typography>
              <Typography as={Link} to={'/login'} variant={'subtitle1'}>
                Sign In
              </Typography>
            </div>
          </SignUp>
        </div>
      </Card>
    </Page>
  )
}
