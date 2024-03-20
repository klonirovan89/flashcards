import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  const email = 'test@gmail.com'

  return (
    <div className={s.root}>
      <Card>
        <div className={s.section}>
          <Typography variant={'h1'}>Check Email</Typography>
          <Icon height={'96'} iconId={'Email'} width={'96'} />
          <Typography variant={'body2'}>
            We’ve sent an Email with instructions to {email}
          </Typography>
          <Button as={Link} className={s.button} fullWidth to={'/login'} type={'submit'}>
            <Typography variant={'subtitle2'}>Back to Sign In</Typography>
          </Button>
        </div>
      </Card>
    </div>
  )
}
