import {Typography} from '@/components/ui/typography'
import {clsx} from 'clsx'

import s from './input.module.scss'
import {useState} from "react";

export type SuperInputProps = {
    placeholder?: string
    title?: string
    type?: 'default' | 'password' | 'search'
    errorMessage?: string
}

export const SuperInput = (props: SuperInputProps) => {
    const {placeholder, title, type = 'default', errorMessage} = props
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(true)

    const finalInputType = isVisiblePassword ? 'default' : type
    const inputClassName = clsx(s.input, s[errorMessage ? 'error' : ''])
    const eyeClassName = clsx(s.eyeButton, s[isVisiblePassword ? 'opened' : 'closed'])

    return (
        <div className={s.superInput}>
            <Typography variant={'body2'}>{title}</Typography>
            <div className={s.textField}>
                <input className={inputClassName} placeholder={placeholder} type={finalInputType}/>
              {type === 'password' ? <div className={eyeClassName} onClick={() => setIsVisiblePassword(!isVisiblePassword)}></div> : ''}
            </div>
            {!!errorMessage && <Typography variant={'link2'}>{errorMessage}</Typography>}
        </div>
    )
}