import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password.module.scss'

export const ForgotPassword = () => {
  const users = [
    {
      email: 'test@gmail.com',
      name: 'Test',
    },
    {
      email: 'pasha@gmail.com',
      name: 'Pasha',
    },
  ]

  const loginSchema = z
    .object({
      email: z.string().email(),
    })
    .refine(data => users.some(el => el.email === data.email), {
      message: 'User not found',
      path: ['email'],
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
    alert('submit')

    return data
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
            <Typography
              as={'a'}
              onClick={() => alert('Здесь дожлен быть роут')}
              variant={'subtitle1'}
            >
              Try logging in
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  )
}
