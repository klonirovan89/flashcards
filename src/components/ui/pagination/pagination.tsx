import { useEffect, useState } from 'react'

import { ButtonBlock } from '@/components/ui/pagination/buttonBlock/buttonBlock'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

import s from '../pagination/pagination.module.scss'

type ListNumberValuesType = {
  label: string
  value: string
}

export type PropsType = {
  label: string
  listNumberValues: ListNumberValuesType[]
  values: ValuesType[]
}

export type ValuesType = {
  name: string
}

export const PaginationControl = (props: PropsType) => {
  const { label, listNumberValues, values } = props

  const [selectedPage, setSelectedPage] = useState<number>(1)
  const [selectedValue, setSelectedValue] = useState<string>(listNumberValues[0].label)
  const [valuesPage, setValuesPage] = useState<ValuesType[]>(values)
  const [countPage, setCountPage] = useState<number>(1)

  useEffect(() => {
    const startIndex = (selectedPage - 1) * +selectedValue
    const endIndex = startIndex + +selectedValue
    const valuesForPage = values.slice(startIndex, endIndex)

    setValuesPage(valuesForPage)
  }, [selectedPage, selectedValue, values])

  useEffect(() => {
    const newCountPage = Math.ceil(values.length / +selectedValue)

    setCountPage(newCountPage)

    if (selectedPage > newCountPage) {
      setSelectedPage(newCountPage)
    }

    setValuesPage(values.slice(0, +selectedValue))
  }, [selectedValue, values])

  const handleChange = (value: number) => {
    setSelectedPage(value)
  }

  const handleSelectChange = (value: string) => {
    setSelectedValue(value)
  }

  const handleChangeArrow = (step: number) => {
    setSelectedPage(prevPage => Math.max(1, Math.min(prevPage + step, countPage)))
  }

  const numbers: number[] = []

  for (let i = 1; i <= countPage; i++) {
    numbers.push(i)
  }

  return (
    <div>
      {label && <Typography variant={'body2'}>{label}</Typography>}
      <div>
        {valuesPage.map((el, index) => (
          <Typography key={index} variant={'body2'}>
            {el.name}
          </Typography>
        ))}
      </div>
      <div className={s.div}>
        <ButtonBlock
          countPage={countPage}
          handleChange={handleChange}
          handleChangeArrow={handleChangeArrow}
          numbers={numbers}
          selectedPage={selectedPage}
        />
        <div className={s.select}>
          <Typography className={s.typographyStyle} variant={'body2'}>
            Show
          </Typography>
          <Select
            classForPagination
            handleSelectChange={handleSelectChange}
            options={listNumberValues}
            selectedValue={selectedValue}
          />
          <Typography className={s.typographyStyle} variant={'body2'}>
            on the page
          </Typography>
        </div>
        <Typography className={s.typographyStyle} variant={'body2'}>
          Current page: {selectedPage}
        </Typography>
        <Typography className={s.typographyStyle} variant={'body2'}>
          Сurrent number values on the page: {selectedValue}
        </Typography>
      </div>
    </div>
  )
}
