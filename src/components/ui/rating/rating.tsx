import activeStar from './icons/ActiveStar.svg'
import star from './icons/Star.svg'

export const Rating = (props: PropsType) => {
  const { defaultValue } = props

  const starsList = [1, 2, 3, 4, 5]

  return (
    <div>
      {starsList.map(el =>
        el <= defaultValue ? (
          <img alt={'activeStar'} height={16} key={el} src={activeStar} width={16} />
        ) : (
          <img alt={'star'} height={16} key={el} src={star} width={16} />
        )
      )}
    </div>
  )
}

type PropsType = {
  defaultValue: number
}
