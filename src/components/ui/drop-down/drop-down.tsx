import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import verticalOutline from './icons/verticalOutline.svg'
import s from './drop-down.module.scss'
import {Typography} from "@/components/ui/typography";
import play from './../table/icons/play.svg'

export const DropdownMenu = (props: PropsType) => {
    const {value} = props;

    return (
        <div className={s.container}>
            <div>Click me:</div>
            <RadixDropdownMenu.Root>
                <RadixDropdownMenu.Trigger>
                    <button className={s.button}>
                        <img src={verticalOutline} alt="fdddfd"/>
                    </button>
                </RadixDropdownMenu.Trigger>
                <RadixDropdownMenu.Portal>
                    <RadixDropdownMenu.Content className={s.content} sideOffset={0} align={"end"}>
                        {value.map(el => (
                            <RadixDropdownMenu.Item className={s.menuItem}>
                                <button className={s.item} onClick={() => alert("play")}>
                                    <div className={s.img}>
                                        <img src={play} alt="play"/>
                                    </div>
                                    <Typography className={s.typographyStyle} variant={"caption"}>{el}</Typography>
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
    value: string[]
}