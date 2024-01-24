import * as Checkbox from '@radix-ui/react-checkbox';
import s from './checkbox.module.scss'
import {CheckIcon} from '@radix-ui/react-icons';
import {Typography} from "@/components/ui/typography";

export type CheckboxProps = {
    onChange: () => void
    checked: boolean
    disabled: boolean
    label?: string
}

export const CheckboxControl = (props: CheckboxProps) => {
    const {checked, disabled, label, onChange} = props

    return (
        <div className={s.div}>
            <div className={disabled ? s.disabled : s.checkbox}>
                <Checkbox.Root className={s.сheckboxRoot} defaultChecked id="c1" checked={checked} disabled={disabled}
                               onCheckedChange={onChange}>
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

