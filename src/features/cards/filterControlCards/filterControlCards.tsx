import React from 'react'

import { TextField } from '@/components/ui/text-field'

import s from './filterControlCards.module.css'

export const FilterControlCards = (props: PropsType) => {
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
      />
    </div>
  )
}

type PropsType = {
  searchName: string
  setSearchName: (e: string) => void
}
