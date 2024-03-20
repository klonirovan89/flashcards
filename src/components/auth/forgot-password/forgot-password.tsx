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
const forgotPasswordSchema = z.object({
  email: z.string().email().trim(),
})

type FormValues = z.infer<typeof forgotPasswordSchema>
export const ForgotPassword = () => {
  const [recoveryPassword] = usePasswordRecoveryMutation()

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { email: 'gbmtt@mail.ru' },
    resolver: zodResolver(forgotPasswordSchema),
  })

  const navigate = useNavigate()
  const onSubmit = async (data: FormValues) => {
    recoveryPassword({
      email: data.email,
      html:
        '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
        '    <title>Восстановление пароля</title>\n' +
        '    <style>\n' +
        '        body {\n' +
        '            font-family: Arial, sans-serif;\n' +
        '            line-height: 1.6;\n' +
        '            margin: 0;\n' +
        '            padding: 0;\n' +
        '            background-color: #f8f8f8;\n' +
        '        }\n' +
        '        .container {\n' +
        '            max-width: 600px;\n' +
        '            margin: 0 auto;\n' +
        '            padding: 20px;\n' +
        '            background-color: #fff;\n' +
        '            border-radius: 8px;\n' +
        '            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n' +
        '        }\n' +
        '        h1 {\n' +
        '            color: #333;\n' +
        '            text-align: center;\n' +
        '        }\n' +
        '        p {\n' +
        '            color: #666;\n' +
        '            font-size: 16px;\n' +
        '            margin-bottom: 20px;\n' +
        '        }\n' +
        '        a {\n' +
        '            color: #007bff;\n' +
        '            text-decoration: none;\n' +
        '        }\n' +
        '        a:hover {\n' +
        '            text-decoration: underline;\n' +
        '        }\n' +
        '    </style>\n' +
        '</head>\n' +
        '<body>\n' +
        '    <div class="container">\n' +
        '        <h1>Привет, ##name##</h1>\n' +
        '        <p>Мы обнаружили запрос на восстановление пароля для вашей учетной записи.</p>\n' +
        '        <p>Если это были вы, пожалуйста, перейдите по ссылке ниже, чтобы сбросить пароль. Если это было не вы, проигнорируйте это письмо.</p>' +
        '        <p>Если у вас возникли какие-либо вопросы или проблемы, пожалуйста, свяжитесь с нашей службой поддержки по адресу supportQuizCards@google.com.</p>\n' +
        '        <p>С наилучшими пожеланиями,<br>Команда поддержки<br>Q-Cards</p>\n' +
        '    </div>\n' +
        '</body>\n' +
        '</html>\n',
    })
    navigate('/check-email')
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
