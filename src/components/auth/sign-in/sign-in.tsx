import {useForm} from 'react-hook-form'

import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'

import s from './sign-in.module.scss'
import {Button} from '../../ui/button/button'
import {ControlledTextField} from "@/controlled/controlled-text-field/controlled-text-field";
import {ControlledCheckbox} from "@/controlled/controlled-ckeckbox/controlled-ckeckbox";
import {Typography} from "@/components/ui/typography";

export const SignIn = () => {
    const loginSchema = z.object({
        email: z.string().email(),
        password: z.string().min(3).max(30),
        rememberMe: z.boolean().default(false),
    })

    const {
        control,
        formState: {errors},
        handleSubmit,
    } = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
    })

    type FormValues = z.infer<typeof loginSchema>

    const onSubmit = (data: FormValues) => {
        return data
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.section}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Typography variant={'h1'}>
                            Sign In
                        </Typography>
                        <div className={s.textField}>
                            <ControlledTextField
                                control={control}
                                errorMessage={errors.email?.message}
                                label={'Email'}
                                name={'email'}
                            />
                            <ControlledTextField
                                control={control}
                                errorMessage={errors.password?.message}
                                label={'Password'}
                                name={'password'}
                                type={'password'}
                            />
                        </div>
                        <ControlledCheckbox
                            control={control}
                            label={'Remember Me'}
                            name={'rememberMe'}/>
                        <div className={s.linkStyle}>
                            <Typography
                                className={s.typographyLinkStyle}
                                as={'a'}
                                onClick={() => alert('Здесь дожлен быть роут')}
                                variant={'body2'}
                            >
                                Forgot Password?
                            </Typography>
                        </div>
                        <Button className={s.button} type={'submit'} fullWidth>Sign In</Button>
                        <div className={s.typographyStyle}>
                            <Typography variant={'body2'}>
                                Don't have an account?
                            </Typography>
                            <Typography
                                as={'a'}
                                onClick={() => alert('Здесь дожлен быть роут')}
                                variant={'subtitle1'}
                            >
                                Sign Up
                            </Typography>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}