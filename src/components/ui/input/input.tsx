import {Typography} from '@/components/ui/typography'
import {clsx} from 'clsx'

import s from './input.module.scss'
import {ComponentPropsWithoutRef, forwardRef, useState} from "react";
import {EyeNoneIcon, EyeOpenIcon, MagnifyingGlassIcon} from "@radix-ui/react-icons";

export type SuperInputProps = {
    placeholder?: string
    label?: string
    type?: 'default' | 'password' | 'search' | 'file'
    errorMessage?: string
    disabled?: boolean
} & ComponentPropsWithoutRef<'input'>


type PropsType = SuperInputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof SuperInputProps>


export const SuperInput = forwardRef<HTMLInputElement, PropsType>(
    ({placeholder, label, type = 'default', errorMessage, disabled = false, ...rest}, ref) => {
      
        const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false)

        const finalInputType = isVisiblePassword ? 'default' : type
        const inputClassName = clsx(s.input, s[errorMessage ? 'error' : ''], s[type])

        const eyeClassName = clsx(s.eyeButton, s[isVisiblePassword ? 'opened' : 'closed'])
        const eyeOnClick = () => setIsVisiblePassword(!isVisiblePassword)

        return (
            <div className={s.superInput}>
                <Typography variant={'body2'}>{label}</Typography>

                <div className={s.textField}>

                    <input className={inputClassName} placeholder={placeholder} type={finalInputType} disabled={disabled} ref={ref} {...rest}/>

                    {type === 'password' ?
                        isVisiblePassword ? <EyeNoneIcon className={eyeClassName} onClick={eyeOnClick}/>
                            : <EyeOpenIcon className={eyeClassName} onClick={eyeOnClick}/>
                        : ''}

                    {type === 'search' ?
                        <MagnifyingGlassIcon className={s.magniGlass}/> : ''}

                </div>

                {!!errorMessage && <Typography variant={'link2'}>{errorMessage}</Typography>}

            </div>
        )
    }
)
