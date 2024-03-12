import { Typography } from '@/components/ui/typography'
import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

export const Slider = (props: PropsType) => {
  const { max, min, onChangeSliderValue, step = 1, text, value } = props

  return (
    <div className={s.wrapper}>
      <Typography variant={'body2'}>{text}</Typography>
      <div className={s.container}>
        <Typography className={s.typographyStyle} variant={'body1'}>
          {value[0]}
        </Typography>
        <RadixSlider.Root
          className={s.root}
          max={max}
          min={min}
          onValueChange={onChangeSliderValue}
          step={step}
          value={value}
        >
          <RadixSlider.Track className={s.track}>
            <RadixSlider.Range className={s.range} />
          </RadixSlider.Track>
          <RadixSlider.Thumb className={s.thumb}></RadixSlider.Thumb>
          <RadixSlider.Thumb className={s.thumb}></RadixSlider.Thumb>
        </RadixSlider.Root>
        <Typography className={s.typographyStyle} variant={'body1'}>
          {value[1]}
        </Typography>
      </div>
    </div>
  )
}

type PropsType = {
  max: number
  min: number
  onChangeSliderValue: (value: number[]) => void
  step?: number
  text: string
  value: number[]
}
