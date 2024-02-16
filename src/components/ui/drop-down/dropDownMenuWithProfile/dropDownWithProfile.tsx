import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import s from './dropDownWithProfile.module.scss'
import {Typography} from "@/components/ui/typography";
import {Icon} from "@/components/ui/icon/Icon";
import {Avatar} from "@/components/ui/avatar";

export const DropDownMenuWithProfile = (props: PropsType) => {
    const {value, userData} = props;

    return (
        <div className={s.container}>
            {/*<div>There is the avatar is button for menu:</div>*/}
            <RadixDropdownMenu.Root>
                <RadixDropdownMenu.Trigger className={s.trigger}>
                        <Avatar value={userData.avatar}/>
                </RadixDropdownMenu.Trigger>
                <RadixDropdownMenu.Portal>
                    <RadixDropdownMenu.Content className={s.content} sideOffset={8} align={"end"}>
                            <div className={s.itemProfile}>
                                <div className={s.img}>
                                    <Avatar value={userData.avatar}/>
                                </div>
                                <div className={s.userData}>
                                    <Typography variant={"subtitle2"}>{userData.name}</Typography>
                                    <Typography className={s.typographyStyleEmail} variant={"caption"}>{userData.email}</Typography>
                                </div>
                            </div>
                        {value.map((el,index) => (
                            <RadixDropdownMenu.Item className={s.menuItem} key={index}>
                                <div className={s.item} onClick={() => alert("play")}>
                                    <div className={s.icon}>
                                        <Icon iconId={el.id} height={"16px"} width={"16px"}/>
                                    </div>
                                    <Typography className={s.typographyStyle} variant={"caption"}>{el.label}</Typography>
                                </div>
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
    userData: {
        name: string,
        email: string,
        avatar: {
            id: string,
            image: string
        }
    }
}

type ValuesType = {
    id: string
    label: string
}

