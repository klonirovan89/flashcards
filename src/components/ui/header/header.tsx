import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  DropDownMenuWithProfile,
  ProfileDropdownProps,
} from '@/components/ui/drop-down/dropDownMenuWithProfile'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

export const Header = ({ avatar, email, isLoggedIn, logout, userName }: HeaderProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Button as={Link} className={s.buttonLogo} to={'/'} variant={'link'}>
          <Icon height={'60px'} iconId={'Logo'} width={'60px'} />
          <Typography variant={'h2'}>CARDS</Typography>
        </Button>
        {isLoggedIn ? (
          <div className={s.dropDown}>
            <DropDownMenuWithProfile
              avatar={avatar}
              email={email}
              logout={logout}
              userName={userName}
            />
            <Typography as={Link} to={'/edit-profile'} variant={'subtitle1'}>
              {userName}
            </Typography>
          </div>
        ) : (
          <Button as={Link} to={'/login'} variant={'secondary'}>
            Sign In
          </Button>
        )}
      </div>
    </div>
  )
}

export type HeaderProps =
  | (Partial<ProfileDropdownProps> & {
      isLoggedIn: false
    })
  | (ProfileDropdownProps & {
      isLoggedIn: true
    })
