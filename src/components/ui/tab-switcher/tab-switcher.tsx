import {Typography} from '@/components/ui/typography'
import * as RadixTabsSwitcher from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'
import {ListValuesType} from "@/features/decks/filterControlBlock";

export const TabSwitcher = (props: PropsType) => {
    const {listValues, onValueChange, tabSwitcherValue, text} = props

    return (
        <div>
            <Typography variant={'body2'}>{text}</Typography>
            <RadixTabsSwitcher.Root className={s.root} onValueChange={onValueChange} value={tabSwitcherValue}>
                <RadixTabsSwitcher.List>
                    {listValues.map(el => (
                        <RadixTabsSwitcher.Trigger
                            className={s.trigger}
                            disabled={el.disabled}
                            key={el.value}
                            value={el.value}
                        >
                            <Typography className={s.typographyStyle} variant={'body1'}>
                                {el.text}
                            </Typography>
                        </RadixTabsSwitcher.Trigger>
                    ))}
                </RadixTabsSwitcher.List>
            </RadixTabsSwitcher.Root>
        </div>

    )
}

type PropsType = {
    text: string
    listValues: ListValuesType[]
    tabSwitcherValue: string
    onValueChange: (value: string) => void
}
