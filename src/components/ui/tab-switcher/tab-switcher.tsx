import * as RadixTabsSwitcher from '@radix-ui/react-tabs'
import s from './tab-switcher.module.scss'
import {Typography} from "@/components/ui/typography";

export const TabSwitcher = (props: PropsType) => {
    const {onValueChange, listValues, value} = props

    return (
        <RadixTabsSwitcher.Root value={value} onValueChange={onValueChange} className={s.root}>
            <RadixTabsSwitcher.List>
                {listValues.map(el => (
                    <RadixTabsSwitcher.Trigger
                        className={s.trigger}
                        value={el.value}
                        key={el.value}
                        disabled={el.disabled}
                    >
                        <Typography className={s.typographyStyle} variant={'body1'}>{el.text}</Typography>
                    </RadixTabsSwitcher.Trigger>
                ))}
            </RadixTabsSwitcher.List>
        </RadixTabsSwitcher.Root>
    );
};

type PropsType = {
    onValueChange: (value: string) => void
    listValues: {
        value: string
        text: string
        disabled: boolean
    }[]
    value: string
}