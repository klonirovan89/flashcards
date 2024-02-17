import { Avatar } from '@/components/ui/avatar'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDownWithProfile.module.scss'

export const DropDownMenuWithProfile = (props: PropsType) => {
  const { userData, value } = props

  return (
    <div className={s.container}>
      <div>There is the avatar is button for menu:</div>
      <RadixDropdownMenu.Root>
        <RadixDropdownMenu.Trigger>
          <button className={s.button}>
            <Avatar value={userData.avatar} />
          </button>
        </RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Portal>
          <RadixDropdownMenu.Content align={'end'} className={s.content} sideOffset={8}>
            <div className={s.itemProfile}>
              <div className={s.img}>
                <Avatar value={userData.avatar} />
              </div>
              <div className={s.userData}>
                <Typography variant={'subtitle2'}>{userData.name}</Typography>
                <Typography className={s.typographyStyleEmail} variant={'caption'}>
                  {userData.email}
                </Typography>
              </div>
            </div>
            {value.map(el => (
              <RadixDropdownMenu.Item className={s.menuItem}>
                <button className={s.item} onClick={() => alert('play')}>
                  <div className={s.icon}>
                    <Icon height={'16px'} iconId={el.id} width={'16px'} />
                  </div>
                  <Typography className={s.typographyStyle} variant={'caption'}>
                    {el.label}
                  </Typography>
                </button>
              </RadixDropdownMenu.Item>
            ))}
            <span className={s.arrow}></span>
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root>
    </div>
  )
}

type PropsType = {
  userData: {
    avatar: {
      id: string
      image: string
    }
    email: string
    name: string
  }
  value: ValuesType[]
}

type ValuesType = {
  id: string
  label: string
}
