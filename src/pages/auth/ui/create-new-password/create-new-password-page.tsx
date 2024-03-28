import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  CreateNewPassword,
  FormValuesCreateNewPassword,
} from '@/components/auth/create-new-password'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useResetPasswordMutation } from '@/pages/auth/api/auth-api'

import s from '@/components/auth/create-new-password/create-new-password.module.scss'

export const CreateNewPasswordPage = () => {
  const { token } = useParams<{ token: string }>()
  const [resetPassword] = useResetPasswordMutation()
  const navigate = useNavigate()

  const handleCreateNewPassword = async (data: FormValuesCreateNewPassword) => {
    try {
      await resetPassword({ password: data.password, token: token ?? '' }).unwrap()
      toast.success('New password create success', { containerId: 'appId' })
      navigate('/login')
    } catch (e: any) {
      toast.error(e.data.message, { containerId: 'appId' })
    }
  }

  return (
    <div className={s.root}>
      <Card>
        <div className={s.section}>
          <Typography variant={'h1'}>Create new password</Typography>
          <CreateNewPassword className={s.form} onSubmit={handleCreateNewPassword} />
        </div>
      </Card>
    </div>
  )
}
