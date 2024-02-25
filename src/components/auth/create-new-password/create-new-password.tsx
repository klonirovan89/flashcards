import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-new-password.module.scss'
import { Card } from '@/components/ui/card'

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

  const onSubmit = (data: FormValues) => {
    alert('Произошел submit и дальше должен быть переход на новый роут')

    return data
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
