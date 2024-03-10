import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn } from '@/components/auth/sign-in'
import { useLoginMutation } from '@/pages/auth/api/auth-api'
import { LoginArgs } from '@/pages/auth/api/auth-types'

export const LoginPage = () => {
  const [signIn] = useLoginMutation()
  const navigate = useNavigate()
  const handleSignIn = (data: LoginArgs) => {
    signIn(data)
      .unwrap()
      //TODO: переделать
      .then(() => {
        navigate('/')
      })
      .catch(err => {
        toast.error(err?.data?.message ?? 'Could not sign in')
      })
  }

  return (
    <>
      <SignIn onSubmit={handleSignIn} />
    </>
  )
}
