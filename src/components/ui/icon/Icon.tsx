import iconSprite from '@/assets/icons/icons-sprite.svg'

export const Icon = (props: IconPropsType) => {
  const { height, iconId, width, className } = props
  return (
    <svg height={height} width={width} className={className}>
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  )
}

type IconPropsType = {
  height?: string
  iconId: string
  width?: string
  className?: string
}
