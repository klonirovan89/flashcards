import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { usePasswordRecoveryMutation } from '@/pages/auth/api/auth-api'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password.module.scss'
const recoveryPasswordSchema = z.object({
  email: z.string().email().trim(),
})

type FormValues = z.infer<typeof recoveryPasswordSchema>
export const ForgotPassword = () => {
  const [recoveryPassword] = usePasswordRecoveryMutation()

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { email: 'gbmtt@mail.ru' },
    resolver: zodResolver(recoveryPasswordSchema),
  })

  const navigate = useNavigate()
  const onSubmit = async (data: FormValues) => {
    recoveryPassword({
      email: data.email,
      html: '<h1>Hi, ##name##</h1><p>Click <a href="https://cards-production.vercel.app//create-new-password/##token##">here</a> to recover your password</p>',
    })
    navigate(`/check-email/${data.email}`)
  }

  return (
    <div className={s.root}>
      <Card>
        <div className={s.section}>
          <Typography variant={'h1'}>Forgot your password?</Typography>
          <div className={s.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={s.textField}>
                <ControlledTextField
                  control={control}
                  errorMessage={errors.email?.message}
                  label={'Email'}
                  name={'email'}
                />
              </div>
              <Typography variant={'body2'}>
                Enter your email address and we will send you further instructions
              </Typography>
              <Button className={s.button} fullWidth type={'submit'}>
                Send Instructions
              </Button>
            </form>
          </div>
          <div className={s.typographyStyle}>
            <Typography variant={'body2'}>Did you remember your password?</Typography>
            <Typography as={Link} to={'/login'} variant={'subtitle1'}>
              Try logging in
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  )
}
