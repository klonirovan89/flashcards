import {DropDownMenuWithProfile} from "@/components/ui/drop-down/dropDownMenuWithProfile";
import {Button} from "@/components/ui/button";
import {Icon} from "@/components/ui/icon/Icon";
import s from './header.module.scss'


export const Header = (props: PropsType) => {

    const {value, userData, isLogin, title} = props;
    return (
        <div className={s.container}>
            <Icon iconId={'Logo'} width={'50px'} height={'50px'}/>
            {isLogin ?
                <div>

                    <DropDownMenuWithProfile userData={userData} value={value}/>
                </div>
                :
                <Button variant={'primary'} as={Link} to={ROUTES.signIn}>{title}</Button>
            }
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
