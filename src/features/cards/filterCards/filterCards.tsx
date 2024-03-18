import React from 'react'

import { TextField } from '@/components/ui/text-field'

import s from './filterCards.module.scss'

export const FilterCards = (props: PropsType) => {
  const { searchName, setSearchName } = props

  const onChangeTextFieldValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.currentTarget.value)
  }

  return (
    <div className={s.top}>
      <TextField
        onChange={onChangeTextFieldValue}
        placeholder={'Search by question'}
        searchName={searchName}
        type={'search'}
        fullWidth
      />
    </div>
  )
}

type PropsType = {
  searchName: string
  setSearchName: (e: string) => void
}
