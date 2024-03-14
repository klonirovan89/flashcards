import React from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './backButton.module.scss'

export const BackButton = (props: PropsType) => {
  const { className, text = 'Back to Previous Page', ...rest } = props
  // const navigate = useNavigate()

  const backHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    // navigate(-1)
  }

  const classes = clsx(s.button, className)

  return (
    <Button as={'a'} className={classes} onClick={backHandler} variant={'link'} {...rest}>
      <Icon height={'16'} iconId={'arrow-back'} width={'16'} />
      <Typography className={s.text} variant={'body2'}>
        Back to Decks List
      </Typography>
    </Button>
  )
}

type PropsType = {
  className?: string
  text?: string
}
