import { PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
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

type Props = {
  className?: string
  onSubmit: (data: FormValuesSignUp) => void
} & PropsWithChildren
export type FormValuesSignUp = z.infer<typeof SignUpSchema>
export const SignUp = ({ children, className, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValuesSignUp>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      sendConfirmationEmail: false,
    },
    resolver: zodResolver(SignUpSchema),
  })
  const classes = clsx(s.form, className)

  return (
    <form className={classes} onSubmit={handleSubmit(onSubmit)}>
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
      {children}
    </form>
  )
}
