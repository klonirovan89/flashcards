import {Button} from "@/components/ui/button";
import {ComponentPropsWithoutRef} from "react";
import {Icon} from "@/components/ui/icon/Icon";
import s from './buttonWithIcon.module.scss'

export const ButtonWithIcon = (props: PropsType) => {
    const {text, variant = 'primary', iconId, disabled, fullWidth, ...rest} = props

    return (
        <Button variant={variant} disabled={disabled} fullWidth={fullWidth} {...rest}>
          <div className={`${s.container} ${disabled ? s.disabled : ''}`} >
            {iconId && <Icon disabled={disabled} iconId={iconId} width={'16px'} height={'16px'}/>}
            {text ? text : ''}
          </div>
        </Button>
    )
}

type PropsType = {
    text?: string
    variant?: 'primary' | 'secondary'
    iconId?: string
    fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>