import iconSprite from '@/assets/icons/icons-sprite.svg'

export const Icon = (props: IconPropsType) => {
  return (
    <svg height={props.height} width={props.width}>
      <use xlinkHref={`${iconSprite}#${props.iconId}`} />
    </svg>
  )
}

type IconPropsType = {
  height?: string
  iconId: string
  width?: string
}
