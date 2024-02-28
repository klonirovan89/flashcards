import { useForm } from 'react-hook-form'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ControlledCheckbox } from '@/controlled/controlled-ckeckbox/controlled-ckeckbox'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { Button } from '../../ui/button/button'

export const SignIn = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(30),
    rememberMe: z.boolean().default(false),
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  type FormValues = z.infer<typeof loginSchema>

  const onSubmit = (data: FormValues) => {
    return data
  }

  return (
    <div className={s.root}>
      <Card>
        <div className={s.section}>
          <Typography variant={'h1'}>Sign In</Typography>
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
                  as={'a'}
                  className={s.typographyLinkStyle}
                  onClick={() => alert('Здесь дожлен быть роут')}
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
            <Typography
              as={'a'}
              onClick={() => alert('Здесь дожлен быть роут')}
              variant={'subtitle1'}
            >
              Sign Up
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  )
}
