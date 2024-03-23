import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { useResetPasswordMutation } from '@/pages/auth/api/auth-api'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-new-password.module.scss'

export const CreateNewPassword = () => {
  const loginSchema = z.object({
    password: z.string().min(3).max(30),
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  type FormValues = z.infer<typeof loginSchema>
  const { token } = useParams<{ token: string }>()
  const [resetPassword] = useResetPasswordMutation()
  const onSubmit = async (data: FormValues) => {
    resetPassword({ password: data.password, token: token ?? '' })
  }

  return (
    <div className={s.root}>
      <Card>
        <div className={s.section}>
          <Typography variant={'h1'}>Create new password</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.textField}>
              <ControlledTextField
                control={control}
                errorMessage={errors.password?.message}
                label={'Password'}
                name={'password'}
                type={'password'}
              />
            </div>
            <Typography className={s.typographyStyle} variant={'body2'}>
              Enter new password and then sign in with it.
            </Typography>
            <Button className={s.button} fullWidth type={'submit'}>
              <Typography variant={'subtitle2'}>Create New Password</Typography>
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}
