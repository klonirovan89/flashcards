import * as RadixAvatar from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

export const Avatar = (props: PropsType) => {
  const { src, userName } = props

  const changeName = (userName: string) => {
    const regex = /[a-zA-Zа-яА-ЯёЁ0-9]/

    const result = []
    let count = 0

    for (let i = 0; i < userName.length; i++) {
      const char = userName[i]

      if (regex.test(char)) {
        result.push(char.toUpperCase())
        count++
        if (count === 2) {
          break
        }
      } else if (char === ' ') {
        count = 0
      }
    }

    return result.join('')
  }

  const abbreviatedName = changeName(userName)

  return (
    <RadixAvatar.Root className={s.avatarRoot}>
      <RadixAvatar.Image alt={'Sem'} className={s.image} src={src} />
      <RadixAvatar.Fallback className={s.avatarFallback} delayMs={600}>
        {abbreviatedName}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

type PropsType = {
  src?: string
  userName: string
}
