import { useForm, useController } from 'react-hook-form'
import { Button } from '../../ui/button/button'
import { SuperInput } from "../../ui/input/input";
import { CheckboxControl } from "@/components/ui/checkbox";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const LoginForm = () => {

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: z.boolean().default(false),
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  type FormValues = z.infer<typeof loginSchema>

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <SuperInput {...register('email')} label={'email'} errorMessage={errors.email?.message}/>
        <SuperInput {...register('password')} label={'password'} errorMessage={errors.password?.message}/>
        <CheckboxControl name={'rememberMe'} onChange={onChange} checked={value} label={'remember me'}/>
        <Button type="submit">Submit</Button>
      </form>
  )
}