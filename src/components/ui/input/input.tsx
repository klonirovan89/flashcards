import {Typography} from '@/components/ui/typography'
import {clsx} from 'clsx'

import s from './input.module.scss'
import {useState} from "react";
import {EyeNoneIcon, EyeOpenIcon, MagnifyingGlassIcon} from "@radix-ui/react-icons";

export type SuperInputProps = {
    placeholder?: string
    title?: string
    type?: 'default' | 'password' | 'search'
    errorMessage?: string
    disabled?: boolean
}

export const SuperInput = (props: SuperInputProps) => {
    const {placeholder, title, type = 'default', errorMessage, disabled = false} = props
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false)

    const finalInputType = isVisiblePassword ? 'default' : type
    const inputClassName = clsx(s.input, s[errorMessage ? 'error' : ''], s[type])

    const eyeClassName = clsx(s.eyeButton, s[isVisiblePassword ? 'opened' : 'closed'])
    const eyeOnClick = () => setIsVisiblePassword(!isVisiblePassword)

    return (
        <div className={s.superInput}>
            <Typography variant={'body2'}>{title}</Typography>

            <div className={s.textField}>

                <input className={inputClassName} placeholder={placeholder} type={finalInputType} disabled={disabled}/>

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