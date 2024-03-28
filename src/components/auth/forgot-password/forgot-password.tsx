import { PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './forgot-password.module.scss'

const recoveryPasswordSchema = z.object({
  email: z.string().email().trim(),
})

type Props = {
  className?: string
  onSubmit: (data: FormValuesRecoveryPassword) => void
} & PropsWithChildren
export type FormValuesRecoveryPassword = z.infer<typeof recoveryPasswordSchema>
export const ForgotPassword = ({ children, className, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValuesRecoveryPassword>({
    defaultValues: { email: '' },
    resolver: zodResolver(recoveryPasswordSchema),
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
      <Typography variant={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>
      {children}
      <Button className={s.button} fullWidth type={'submit'}>
        Send Instructions
      </Button>
    </form>
  )
}
