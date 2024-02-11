import * as RadixSelect from "@radix-ui/react-select";
import s from "../select/select.module.scss";
import {Typography} from "@/components/ui/typography";
import {Icon} from "@/components/ui/icon/Icon";

export const Select = (props: PropsType) => {
    const {
        selectedValue,
        handleSelectChange,
        valuesList,
        disabled,
        label,
        classForPagination
    } = props;

    return (
        <div className={s.container}>
            {label && <Typography variant={"body2"}>{label}</Typography>}
            <RadixSelect.Root defaultValue={selectedValue} onValueChange={(value) => handleSelectChange(value)}>
                    <RadixSelect.Trigger disabled={disabled}
                                         className={classForPagination ? `${s.triggerPagination} ${s.trigger}` : s.trigger}>
                        <RadixSelect.Value placeholder={selectedValue}/>
                        <div className={s.arrow}>
                            <Icon iconId={"Arrow"} width={"16px"} height={"16px"}/>
                        </div>
                    </RadixSelect.Trigger>
                <RadixSelect.Portal>
                    <RadixSelect.Content position="popper" sideOffset={-1}>
                        <RadixSelect.Viewport
                            className={classForPagination ? `${s.viewportPagination} ${s.viewport}` : s.viewport}>
                            {valuesList.map((el, index) => (
                                <RadixSelect.Item key={index} value={el.label} className={s.item}>
                                    <RadixSelect.ItemText>
                                        <Typography className={s.typographyStyle}
                                                    variant={"body2"}>{el.label}</Typography>
                                    </RadixSelect.ItemText>
                                </RadixSelect.Item>
                            ))}
                        </RadixSelect.Viewport>
                    </RadixSelect.Content>
                </RadixSelect.Portal>
            </RadixSelect.Root>
        </div>
    );
};

type valuesListType = {
    value: string
    label: string
}

export type PropsType = {
    selectedValue?: string
    handleSelectChange: (value: string) => void
    valuesList: valuesListType[]
    disabled?: boolean
    label?: string
    classForPagination?: boolean
}

