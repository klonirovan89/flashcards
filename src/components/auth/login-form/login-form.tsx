import { useController, useForm } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button/button'
import { SuperInput } from '../../ui/input/input'

export const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean().default(false),
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  type FormValues = z.infer<typeof loginSchema>

  const onSubmit = (data: FormValues) => {}

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SuperInput {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <SuperInput
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <Checkbox checked={value} label={'remember me'} name={'rememberMe'} onChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
