import s from './filterControlBlock.module.css'
import {TextField} from "@/components/ui/text-field";
import {TabSwitcher} from "@/components/ui/tab-switcher";

export const FilterControlBlock = (props: PropsType) => {
    const {setSearchName, setTabSwitcherValue, listValues, tabSwitcherValue} = props




    const onValueChange = (value: string) => {
        setTabSwitcherValue(value)
    }
    return (
        <div className={s.top}>
            <TextField type={'search'} onChange={e => setSearchName(e.currentTarget.value)}/>
            <TabSwitcher listValues={listValues} onValueChange={onValueChange} tabSwitcherValue={tabSwitcherValue}/>
        </div>
    )
}

type PropsType = {
    listValues: ListValuesType[]
    setSearchName: (e: string) => void
    tabSwitcherValue: string
    setTabSwitcherValue: (value: string) => void
}
export type ListValuesType = {
    disabled: boolean
    text: string
    value: string
}