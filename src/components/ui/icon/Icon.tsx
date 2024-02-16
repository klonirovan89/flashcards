import iconSprite from '@/assets/icons/icons-sprite.svg'

export const Icon = (props: IconPropsType) => {
  const { height, iconId, onClick, width } = props

  return (
    <svg height={height || '16px'} onClick={onClick} width={width || '16px'}>
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  )
}

type IconPropsType = {
  disabled?: boolean
  height?: string
  iconId: string
  onClick?: () => void
  width?: string
}
