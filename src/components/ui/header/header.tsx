import {DropDownMenuWithProfile} from "@/components/ui/drop-down/dropDownMenuWithProfile";
import {Button} from "@/components/ui/button";
import {Icon} from "@/components/ui/icon/Icon";
import s from './header.module.scss'
import {Typography} from "@/components/ui/typography";

export const Header = (props: PropsType) => {

    const {value, userData, isLogin, title} = props;
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Button className={s.buttonLogo} variant={'link'} as={'a'}
                        onClick={() => alert('Здесь дожлен быть роут')}>
                    <Icon iconId={'Logo'} width={'60px'} height={'60px'}/>
                    <Typography variant={'h2'}>CARDS</Typography>
                </Button>
                {isLogin ?
                    <div className={s.dropDown}>
                        <DropDownMenuWithProfile userData={userData} value={value}/>
                        <Typography variant={'subtitle1'} as={'a'}
                                    onClick={() => alert('Здесь дожлен быть роут')}>{userData.name}</Typography>
                    </div>
                    :
                    <Button variant={'primary'}>{title}</Button>
                }
            </div>
        </div>
    )
}

type PropsType = {
    value: {
        id: string
        label: string
    }[]
    userData: {
        name: string,
        email: string,
        avatar: {
            id: string,
            image: string
        }
    }
    isLogin: boolean
    title: string
}
