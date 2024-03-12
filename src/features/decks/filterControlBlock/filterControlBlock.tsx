import s from './filterControlBlock.module.css'
import { TextField } from '@/components/ui/text-field'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { Slider } from '@/components/ui/slider'
import {ButtonWithIcon} from "@/components/ui/button-with-icon";

export const FilterControlBlock = (props: PropsType) => {
  const {
    setSearchName,
    setTabSwitcherValue,
    listValues,
    maxCardsCount,
    sliderValue,
    setSliderValue,
    tabSwitcherValue,
    clearFilter
  } = props

  const onChangeTabSwitcherValue = (value: string) => {
    setTabSwitcherValue(value)
  }

  const onChangeSliderValue = (value: number[]) => {
    setSliderValue(value)
  }

  return (
    <div className={s.top}>
      <TextField type={'search'} onChange={e => setSearchName(e.currentTarget.value)} />
      <TabSwitcher
        listValues={listValues}
        onChangeTabSwitcherValue={onChangeTabSwitcherValue}
        tabSwitcherValue={tabSwitcherValue}
        text={'Show decks cards'}
      />
      <Slider
        value={sliderValue}
        min={0}
        max={maxCardsCount}
        onChangeSliderValue={onChangeSliderValue}
        text={'Number of cards'}
      />
        <ButtonWithIcon onClick={clearFilter} iconId={'Delete'} text={'Clear Filter'}/>
    </div>
  )
}

type PropsType = {
  listValues: ListValuesType[]
  setSearchName: (e: string) => void
  tabSwitcherValue: string
  setTabSwitcherValue: (value: string) => void
  maxCardsCount: number
  sliderValue: number[]
  setSliderValue: (value: number[]) => void
  clearFilter: () => void
}
export type ListValuesType = {
  disabled: boolean
  text: string
  value: string
}
