import {Typography} from '@/components/ui/typography'
import * as RadixSlider from '@radix-ui/react-slider'
import s from './slider.module.scss'

export const Slider = (props: PropsType) => {
    const {max, min, onValueChange, step, value} = props

    return (
        <div className={s.container}>
            <div className={s.value}>
                <Typography variant={'body1'}>{value[0]}</Typography>
            </div>
            <RadixSlider.Root
                className={s.root}
                defaultValue={value}
                max={max}
                min={min}
                onValueChange={onValueChange}
                step={step}
            >
                <RadixSlider.Track className={s.track}>
                    <RadixSlider.Range className={s.range}/>
                </RadixSlider.Track>
                <RadixSlider.Thumb className={s.thumb}>
                    <div className={s.thumbPoint}></div>
                </RadixSlider.Thumb>
                <RadixSlider.Thumb className={s.thumb}>
                    <div className={s.thumbPoint}></div>
                </RadixSlider.Thumb>
            </RadixSlider.Root>
            <div className={s.value}>
                <Typography variant={'body1'}>{value[1]}</Typography>
            </div>
        </div>
    );
};

type PropsType = {
    max: number
    min: number
    onValueChange: (value: number[]) => void
    step: number
    value: number[]
}