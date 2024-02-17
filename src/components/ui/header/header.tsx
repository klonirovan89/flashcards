import { Button } from '@/components/ui/button'
import { DropDownMenuWithProfile } from '@/components/ui/drop-down/dropDownMenuWithProfile'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

export const Header = (props: PropsType) => {
  const { isLogin, title, userData, value } = props

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Button
          as={'a'}
          className={s.buttonLogo}
          onClick={() => alert('Здесь дожлен быть роут')}
          variant={'link'}
        >
          <Icon height={'60px'} iconId={'Logo'} width={'60px'} />
          <Typography variant={'h2'}>CARDS</Typography>
        </Button>
        {isLogin ? (
          <div className={s.dropDown}>
            <DropDownMenuWithProfile userData={userData} value={value} />
            <Typography
              as={'a'}
              onClick={() => alert('Здесь дожлен быть роут')}
              variant={'subtitle1'}
            >
              {userData.name}
            </Typography>
          </div>
        ) : (
          <Button variant={'primary'}>{title}</Button>
        )}
      </div>
    </div>
  )
}

type PropsType = {
  isLogin: boolean
  title: string
  userData: {
    avatar: {
      id: string
      image: string
    }
    email: string
    name: string
  }
  value: {
    id: string
    label: string
  }[]
}
