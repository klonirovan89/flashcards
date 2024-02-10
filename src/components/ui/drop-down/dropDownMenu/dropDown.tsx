import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import s from './dropDown.module.scss'
import {Typography} from "@/components/ui/typography";
import {Icon} from "@/components/ui/icon/Icon";

export const DropDownMenu = (props: PropsType) => {
    const {value} = props;

    return (
        <div className={s.container}>
            <div>Click me:</div>
            <RadixDropdownMenu.Root>
                <RadixDropdownMenu.Trigger>
                    <button className={s.button}>
                        <Icon iconId={"verticalOutline"} height={"24px"} width={"24px"}/>
                    </button>
                </RadixDropdownMenu.Trigger>
                <RadixDropdownMenu.Portal>
                    <RadixDropdownMenu.Content className={s.content} sideOffset={2} align={"end"}>
                        {value.map(el => (
                            <RadixDropdownMenu.Item className={s.menuItem}>
                                <button className={s.item} onClick={() => alert("play")}>
                                    <div className={s.icon}>
                                        <Icon iconId={el.id} height={"16px"} width={"16px"}/>
                                    </div>
                                    <Typography className={s.typographyStyle} variant={"caption"}>{el.label}</Typography>
                                </button>
                            </RadixDropdownMenu.Item>
                        ))}
                        <span className={s.arrow}></span>
                    </RadixDropdownMenu.Content>
                </RadixDropdownMenu.Portal>
            </RadixDropdownMenu.Root>
        </div>

    )
}


type PropsType = {
    value: ValuesType[]
}

type ValuesType = {
    id: string
    label: string
}

