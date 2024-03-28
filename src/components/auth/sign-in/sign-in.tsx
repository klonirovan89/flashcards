import { PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/controlled/controlled-ckeckbox/controlled-ckeckbox'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { Button } from '../../ui/button/button'
type Props = {
  className?: string
  onSubmit: (data: FormValuesSignIp) => void
} & PropsWithChildren
export type FormValuesSignIp = z.infer<typeof loginSchema>
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean().optional(),
})

export const SignIn = ({ children, className, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValuesSignIp>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
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
      <ControlledCheckbox control={control} label={'Remember Me'} name={'rememberMe'} />
      {children}
      <Button className={s.button} fullWidth type={'submit'}>
        Sign In
      </Button>
    </form>
  )
}
