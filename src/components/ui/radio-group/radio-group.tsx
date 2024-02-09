import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import s from "./radio-group.module.scss";
import {Typography} from "@/components/ui/typography";

export const RadioGroup = (props: PropsType) => {
    const {disabled, options, selectedValue, errorMessage, ...rest} = props;

    return (
        <RadixRadioGroup.Root className={s.root} defaultValue="default" disabled={disabled} {...rest}>
            {options.map(el => (
                <div className={s.container} key={el.value}>
                    <RadixRadioGroup.Item className={s.item} value={el.value} checked={el.value === selectedValue}>
                        <div className={s.frame}/>
                        <RadixRadioGroup.Indicator className={s.indicator}/>
                    </RadixRadioGroup.Item>
                    <Typography className={disabled ? s.typographyDisabled : ''} variant={"body2"}>{el.label}</Typography>
                </div>
            ))}
            {errorMessage && (
                <Typography variant={"body2"} className={s.error}>{errorMessage}</Typography>
            )}
        </RadixRadioGroup.Root>
    );
};

type PropsType = {
    onValueChange?: (value: string) => void
    disabled: boolean
    options: OptionsType[]
    selectedValue?: string
    errorMessage?: string
}

type OptionsType = {
    label: string
    value: string
}