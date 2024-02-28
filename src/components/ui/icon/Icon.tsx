import iconSprite from '@/assets/icons/icons-sprite.svg'

export const Icon = (props: IconPropsType) => {
  const { className, height, iconId, width } = props

  return (
    <svg className={className} height={height} width={width}>
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  )
}

type IconPropsType = {
  className?: string
  height?: string
  iconId: string
  width?: string
}
