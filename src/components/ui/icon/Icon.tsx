import iconSprite from '@/assets/icons/icons-sprite.svg'

import s from './icon.module.scss'

export const Icon = (props: IconPropsType) => {
  const { className, disabled, height, iconId, width } = props

  return (
    <svg className={disabled ? s.icon : className} height={height} width={width}>
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  )
}

type IconPropsType = {
  className?: string
  disabled?: boolean
  height?: string
  iconId: string
  width?: string
}
