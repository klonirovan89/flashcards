import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { QueryLoader } from '@/components/ui/loader/qeryLoader'
import { Typography } from '@/components/ui/typography'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { useSignUpMutation } from '@/pages/auth/api/auth-api'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'
const SignUpSchema = z
  .object({
    confirmPassword: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(3).max(30),
    sendConfirmationEmail: z.boolean(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof SignUpSchema>
export const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      sendConfirmationEmail: false,
    },
    resolver: zodResolver(SignUpSchema),
  })
  const [signUp, { isLoading }] = useSignUpMutation()

  if (isLoading) {
    return <QueryLoader />
  }
  const onSubmit = async (data: FormValues) => {
    signUp({ email: data.email, password: data.password })
  }

  return (
    <div className={s.root}>
      <Card>
        <div className={s.section}>
          <Typography variant={'h1'}>Sign Up</Typography>
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
              <div className={s.textField}>
                <ControlledTextField
                  control={control}
                  errorMessage={errors.confirmPassword?.message}
                  label={'Confirm Password'}
                  name={'confirmPassword'}
                  type={'password'}
                />
              </div>
              <Button className={s.button} fullWidth type={'submit'}>
                Sign Up
              </Button>
            </form>
          </div>
          <div className={s.typographyStyle}>
            <Typography variant={'body2'}>Already have an account?</Typography>
            <Typography as={Link} to={'/login'} variant={'subtitle1'}>
              Sign In
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  )
}
