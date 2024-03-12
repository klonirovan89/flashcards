import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Typography } from '@/components/ui/typography'
import { EyeNoneIcon, EyeOpenIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

export const TextField = forwardRef<HTMLInputElement, PropsType>(
  (
    { disabled = false, errorMessage, label, placeholder, type = 'default', searchName, ...rest },
    ref
  ) => {
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false)

    const finalInputType = isVisiblePassword ? 'default' : type

    const inputClassName = clsx(s.input, s[errorMessage ? 'error' : ''], s[type])
    const eyeClassName = clsx(s.eyeButton, s[isVisiblePassword ? 'opened' : 'closed'])
    const eyeOnClick = () => setIsVisiblePassword(!isVisiblePassword)

    let passwordIcon = null

    if (type === 'password') {
      if (isVisiblePassword) {
        passwordIcon = <EyeNoneIcon className={eyeClassName} onClick={eyeOnClick} />
      } else {
        passwordIcon = <EyeOpenIcon className={eyeClassName} onClick={eyeOnClick} />
      }
    }

    let searchIcon = null

    if (type === 'search') {
      searchIcon = <MagnifyingGlassIcon className={s.magniGlass} />
    }

    return (
      <div className={s.container}>
        <Typography className={s.typographyStyle} variant={'body2'}>
          {label}
        </Typography>

        <div className={s.textField}>
          <input
            className={inputClassName}
            disabled={disabled}
            placeholder={placeholder}
            ref={ref}
            type={finalInputType}
            value={searchName}
            {...rest}
          />
          {passwordIcon}
          {searchIcon}
        </div>

        {!!errorMessage && (
          <Typography className={s.typographyErrorStyle} variant={'caption'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)

export type TextFiledProps = {
  disabled?: boolean
  errorMessage?: string
  label?: string
  placeholder?: string
  type?: 'default' | 'file' | 'password' | 'search'
  searchName?: string
} & ComponentPropsWithoutRef<'input'>

type PropsType = TextFiledProps & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFiledProps>
