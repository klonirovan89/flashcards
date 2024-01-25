import { Typography } from '@/components/ui/typography'
import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  max: number
  min: number
  onChange: (value: number[]) => void
  step: number
  value: number[]
}

export const SliderControl = (props: SliderProps) => {
  const { max, min, onChange, step, value } = props

  return (
    <div className={s.slider}>
      <div className={s.value}>
        <Typography variant={'body1'}>{value[0]}</Typography>
      </div>
      <Slider.Root
        className={s.sliderRoot}
        defaultValue={value}
        max={max}
        min={min}
        onValueChange={onChange}
        step={step}
      >
        <Slider.Track className={s.sliderTrack}>
          <Slider.Range className={s.sliderRange} />
        </Slider.Track>
        <Slider.Thumb className={s.sliderThumb}>
          <div className={s.sliderThumbPoint}></div>
        </Slider.Thumb>
        <Slider.Thumb className={s.sliderThumb}>
          <div className={s.sliderThumbPoint}></div>
        </Slider.Thumb>
      </Slider.Root>
      <div className={s.value}>
        <Typography variant={'body1'}>{value[1]}</Typography>
      </div>
    </div>
  )
}
