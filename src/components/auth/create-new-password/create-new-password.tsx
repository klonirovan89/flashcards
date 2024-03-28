import { PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './create-new-password.module.scss'

type Props = {
  className?: string
  onSubmit: (data: FormValuesCreateNewPassword) => void
} & PropsWithChildren
const loginSchema = z.object({
  password: z.string().min(3).max(30),
})

export type FormValuesCreateNewPassword = z.infer<typeof loginSchema>
export const CreateNewPassword = ({ children, className, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValuesCreateNewPassword>({
    resolver: zodResolver(loginSchema),
  })

  const classes = clsx(s.form, className)

  return (
    <form className={classes} onSubmit={handleSubmit(onSubmit)}>
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
      {children}
    </form>
  )
}
