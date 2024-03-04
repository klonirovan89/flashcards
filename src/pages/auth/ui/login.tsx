import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn } from '@/components/auth/sign-in'
import { useLoginMutation } from '@/pages/auth/api/auth-api'
import { LoginArgs } from '@/pages/auth/api/auth-types'

export const LoginPage = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const handleLogin = (data: LoginArgs) => {
    login(data)
      .unwrap()
      .then(() => {
        navigate('/')
      })
      .catch(err => {
        toast.error(err.data.message)
      })
  }

  return (
    <>
      <SignIn onSubmit={handleLogin} />
    </>
  )
}
