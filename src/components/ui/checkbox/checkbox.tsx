import * as RadixCheckbox from '@radix-ui/react-checkbox';
import s from './checkbox.module.scss'
import {CheckIcon} from '@radix-ui/react-icons';
import {Typography} from "@/components/ui/typography";
import {ComponentPropsWithoutRef, forwardRef} from "react";

export const Checkbox = forwardRef<HTMLButtonElement, PropsType>((props, ref) => {
        const {checked, disabled, label, onChange, id} = props;
        return (
            <div className={s.container}>
                    <RadixCheckbox.Root className={s.root} defaultChecked id={id} checked={checked}
                                        disabled={disabled}
                                        onCheckedChange={onChange} ref={ref}>
                        <RadixCheckbox.Indicator className={s.indicator}>
                            <CheckIcon/>
                        </RadixCheckbox.Indicator>
                    </RadixCheckbox.Root>
                <div className={s.typographyDisabled}>
                    {label && <Typography variant={'body2'}>{label}</Typography>}
                </div>
            </div>
        )
    }
)

export type PropsType = {
    onChange?: () => void
    checked: boolean
    disabled?: boolean
    label?: string
    id?: string
} & ComponentPropsWithoutRef<'button'>