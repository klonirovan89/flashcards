import * as RadixAvatar from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

export const Avatar = (props: PropsType) => {
  const { src, userName } = props

  // const arrName = userName.split(' ')
  // let name = []

  // for (i = 0; i < arrName.length; i++) {
  //   i < 2 && name.push(arrName[i][0])
  // }
  // name = name.join('').toUpperCase()

  return (
    <RadixAvatar.Root className={s.avatarRoot}>
      <RadixAvatar.Image alt={'Sem'} className={s.image} src={src} />
      <RadixAvatar.Fallback className={s.avatarFallback} delayMs={600}>
        JS
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

type PropsType = {
  src?: string
  userName: string
}
