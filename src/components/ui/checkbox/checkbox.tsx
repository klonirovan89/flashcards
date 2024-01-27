import * as Checkbox from '@radix-ui/react-checkbox';
import s from './checkbox.module.scss'
import {CheckIcon} from '@radix-ui/react-icons';
import {Typography} from "@/components/ui/typography";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type CheckboxProps = {
    onChange?: () => void
    checked: boolean
    disabled?: boolean
    label?: string
    name: string
} & ComponentPropsWithoutRef<'button'>

export const CheckboxControl = forwardRef<HTMLButtonElement, CheckboxProps>(({checked, disabled, label, onChange, name}, ref) => {

    return (
        <div className={s.div}>
            <div className={disabled ? s.disabled : s.checkbox}>
                <Checkbox.Root name={name} className={s.сheckboxRoot} defaultChecked id="c1" checked={checked} disabled={disabled}
                               onCheckedChange={onChange} ref={ref}>
                    <Checkbox.Indicator className={disabled ? s.сheckboxIndicatorDisabled : s.сheckboxIndicator}>
                        <CheckIcon/>
                    </Checkbox.Indicator>
                </Checkbox.Root>
            </div>
            <div className={disabled ? s.typographyDisabled : ''}>
                {label && <Typography variant={'body2'}>{label}</Typography>}
            </div>
        </div>
    )
}
)
