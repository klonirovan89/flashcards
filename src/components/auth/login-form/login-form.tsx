import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/controlled/controlled-ckeckbox/controlled-ckeckbox'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button/button'

export const LoginForm = () => {
    const loginSchema = z.object({
        email: z.string().email(),
        password: z.string().min(3).max(30),
        rememberMe: z.boolean().default(false),
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
        return data
    }

    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <ControlledTextField
                    control={control}
                    errorMessage={errors.email?.message}
                    label={'email'}
                    name={'email'}
                />
                <ControlledTextField
                    control={control}
                    errorMessage={errors.password?.message}
                    label={'password'}
                    name={'password'}
                    type={'password'}
                />
                <ControlledCheckbox
                    control={control}
                    label={'Remember my'}
                    name={'rememberMe'}/>
                <Button type={'submit'}>Submit</Button>
            </form>
    )
}