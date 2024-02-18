import * as RadixAvatar from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

export const Avatar = (props: PropsType) => {
  const { value } = props

  return (
    <RadixAvatar.Root className={s.avatarRoot}>
      {value.image !== '' && (
        <RadixAvatar.Image alt={'Sem'} className={s.image} src={value.image} />
      )}
      <RadixAvatar.Fallback className={s.avatarFallback} delayMs={600}>
        JS
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

type PropsType = {
  value: {
    id: string
    image: string
  }
}
