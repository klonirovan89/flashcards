import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ControlledCheckbox } from '@/controlled/controlled-ckeckbox/controlled-ckeckbox'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { Button } from '../../ui/button/button'
type Props = {
  onSubmit: (data: FormValues) => void
}
type FormValues = z.infer<typeof loginSchema>
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean().optional(),
})

export const SignIn = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: 'test@test.com',
      password: 'test',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const handleFormSubmit = handleSubmit(onSubmit)

  return (
    <div className={s.root}>
      <Card>
        <div className={s.section}>
          <Typography variant={'h1'}>Sign In</Typography>
          <div className={s.form}>
            <form onSubmit={handleFormSubmit}>
              <div className={s.textField}>
                <ControlledTextField
                  control={control}
                  errorMessage={errors.email?.message}
                  label={'Email'}
                  name={'email'}
                />
              </div>
              <div className={s.textField}>
                <ControlledTextField
                  control={control}
                  errorMessage={errors.password?.message}
                  label={'Password'}
                  name={'password'}
                  type={'password'}
                />
              </div>
              <ControlledCheckbox control={control} label={'Remember Me'} name={'rememberMe'} />
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
              <Button className={s.button} fullWidth type={'submit'}>
                Sign In
              </Button>
            </form>
          </div>
          <div className={s.typographyStyle}>
            <Typography variant={'body2'}>Don&apos;t have an account?</Typography>
            <Typography as={Link} to={'/sign-up'} variant={'subtitle1'}>
              Sign Up
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  )
}
