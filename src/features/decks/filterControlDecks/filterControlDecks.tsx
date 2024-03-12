import React from 'react'

import { ButtonWithIcon } from '@/components/ui/button-with-icon'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { TextField } from '@/components/ui/text-field'

import s from './filterControlDecks.module.css'

export const FilterControlDecks = (props: PropsType) => {
  const {
    listValues,
    maxCardsCount,
    searchName,
    setSearchName,
    setSliderValue,
    setTabSwitcherValue,
    sliderValue,
    tabSwitcherValue,
  } = props

  const onChangeTabSwitcherValue = (value: string) => {
    setTabSwitcherValue(value)
  }

  const onChangeSliderValue = (value: number[]) => {
    setSliderValue(value)
  }

  const onChangeTextFieldValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.currentTarget.value)
  }

  const clearFilter = () => {
    setSliderValue([0, maxCardsCount])
    setSearchName('')
    setTabSwitcherValue(listValues[1].value)
  }

  return (
    <div className={s.top}>
      <TextField onChange={onChangeTextFieldValue} searchName={searchName} type={'search'} />
      <TabSwitcher
        listValues={listValues}
        onChangeTabSwitcherValue={onChangeTabSwitcherValue}
        tabSwitcherValue={tabSwitcherValue}
        text={'Show decks cards'}
      />
      <Slider
        max={maxCardsCount}
        min={0}
        onChangeSliderValue={onChangeSliderValue}
        text={'Number of cards'}
        value={sliderValue}
      />
      <ButtonWithIcon
        iconId={'Delete'}
        onClick={clearFilter}
        text={'Clear Filter'}
        variant={'secondary'}
      />
    </div>
  )
}

type PropsType = {
  listValues: ListValuesType[]
  maxCardsCount: number
  searchName: string
  setSearchName: (e: string) => void
  setSliderValue: (value: number[]) => void
  setTabSwitcherValue: (value: string) => void
  sliderValue: number[]
  tabSwitcherValue: string
}
export type ListValuesType = {
  disabled: boolean
  text: string
  value: string
}
