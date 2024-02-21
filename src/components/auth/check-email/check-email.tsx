import { Typography } from '@/components/ui/typography'

import s from './check-email.module.scss'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'

export const CheckEmail = () => {
  const email = 'test@gmail.com'

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.section}>
          <Typography variant={'h1'}>Check Email</Typography>
          <Icon iconId={'Email'} width={'96'} height={'96'} />
          <Typography variant={'body2'}>
            We’ve sent an Email with instructions to {email}
          </Typography>
          <Button
            className={s.button}
            as={'a'}
            fullWidth
            type={'submit'}
            onClick={() => alert('Здесь дожлен быть роут')}
          >
            <Typography variant={'subtitle2'}>Back to Sign In</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}
