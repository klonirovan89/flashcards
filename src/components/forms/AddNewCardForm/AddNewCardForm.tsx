import { useState } from 'react'

import { FileUploaderWithImage } from '@/components/ui/file-uploader-with-image-block'
import { SuperInput } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

import c from './AddNewCardForm.module.scss'

export const AddNewCardForm = () => {
  const options = [
    {
      label: 'Text',
      value: 'Text',
    },
    {
      label: 'Picture',
      value: 'Picture',
    },
  ]

  const [selectValue, setSelectValue] = useState<string>('Text')

  return (
    <form className={c.wrapper}>
      <Select
        handleSelectChange={value => setSelectValue(value)}
        label={'Choose A Question Format'}
        selectedValue={selectValue}
        valuesList={options}
      />
      <div className={c.formRow}>
        <SuperInput label={'Question'} />
        {selectValue === 'Picture' && <FileUploaderWithImage text={'Change Cover'} />}
      </div>
      <div className={c.formRow}>
        <SuperInput label={'Answer'} />
        {selectValue === 'Picture' && <FileUploaderWithImage text={'Change Cover'} />}
      </div>
    </form>
  )
}
