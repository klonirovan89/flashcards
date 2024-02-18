import { Typography } from '@/components/ui/typography'
import * as RadixSlider from '@radix-ui/react-slider'

import s from './slider.module.scss'

export const Slider = (props: PropsType) => {
  const { max, min, onValueChange, step, value } = props

  return (
    <div className={s.container}>
      <Typography className={s.typographyStyle} variant={'body1'}>
        {value[0]}
      </Typography>
      <RadixSlider.Root
        className={s.root}
        defaultValue={value}
        max={max}
        min={min}
        onValueChange={onValueChange}
        step={step}
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
  )
}

type PropsType = {
  max: number
  min: number
  onValueChange: (value: number[]) => void
  step: number
  value: number[]
}
