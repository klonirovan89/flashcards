import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import verticalOutline from './icons/verticalOutline.svg'
import s from './drop-down.module.scss'
import {Typography} from "@/components/ui/typography";
import play from './../table/icons/play.svg'

export const DropDown = () => {

const item = ['Learn', 'Edit', 'Delete']

    return (
        <div className={s.container}>
            <div>ffffffffffffffffffffffff</div>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <button className={s.button}>
                        <img src={verticalOutline} alt="fdddfd"/>
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content className={s.content} sideOffset={5}>
                        {item.map(el => (
                            <DropdownMenu.Item>
                                <button className={s.item} onClick={() => alert("play")}>
                                    <div className={s.img}>
                                        <img src={play} alt="play"/>
                                    </div>
                                    <Typography className={s.typographyStyle} variant={"caption"}>{el}</Typography>
                                </button>
                            </DropdownMenu.Item>
                            ))}
                        <DropdownMenu.Arrow/>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </div>

    )
}