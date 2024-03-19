import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDownWithProfile.module.scss'

export const DropDownMenuWithProfile = (props: ProfileDropdownProps) => {
  const { avatar, email, logout, userName } = props
  const [open, setOpen] = useState(false)

  return (
    <div className={s.container}>
      <RadixDropdownMenu.Root onOpenChange={setOpen} open={open}>
        <RadixDropdownMenu.Trigger className={s.trigger}>
          <Avatar src={avatar} userName={userName} />
        </RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Portal>
          <RadixDropdownMenu.Content align={'end'} className={s.content} sideOffset={8}>
            <div className={s.itemProfile}>
              <Avatar src={avatar} userName={userName} />
              <div className={s.userData}>
                <Typography variant={'subtitle2'}>{userName}</Typography>
                <Typography className={s.typographyStyleEmail} variant={'caption'}>
                  {email}
                </Typography>
              </div>
            </div>
            <RadixDropdownMenu.Item className={s.menuItem} onClick={() => setOpen(!open)}>
              <Button as={Link} className={s.item} to={'/edit-profile'} variant={'pure'}>
                <div className={s.icon}>
                  <Icon height={'16px'} iconId={'User'} width={'16px'} />
                </div>
                <Typography className={s.typographyStyle} variant={'caption'}>
                  My Profile
                </Typography>
              </Button>
            </RadixDropdownMenu.Item>
            <RadixDropdownMenu.Item className={s.menuItem} onClick={() => setOpen(!open)}>
              <Button className={s.item} onClick={logout} variant={'pure'}>
                <div className={s.icon}>
                  <Icon height={'16px'} iconId={'Logout'} width={'16px'} />
                </div>
                <Typography className={s.typographyStyle} variant={'caption'}>
                  Sign Out
                </Typography>
              </Button>
            </RadixDropdownMenu.Item>
            <RadixDropdownMenu.Arrow />
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root>
    </div>
  )
}

export type ProfileDropdownProps = {
  avatar: string
  email: string
  logout: () => void
  userName: string
}
