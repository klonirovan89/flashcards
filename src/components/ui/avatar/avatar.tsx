import * as RadixAvatar from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

export const Avatar = (props: PropsType) => {
  const { src } = props

  return (
    <RadixAvatar.Root className={s.avatarRoot}>
      {src !== '' && <RadixAvatar.Image alt={'Sem'} className={s.image} src={src} />}
      <RadixAvatar.Fallback className={s.avatarFallback} delayMs={600}>
        JS
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

type PropsType = {
  // value: {
  //   id: string
  //   image: string
  // }
  src: string
}
