import { useState } from 'react'

import { FileUploaderWithImage } from '@/components/ui/file-uploader-with-image-block'
import { FormButtons } from '@/components/ui/form-buttons'
import { Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/text-field'

import c from './cardForm.module.scss'

export const CardForm = ({ changeModalState, withSecondary }: AddNewCardFormProps) => {
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
    <div className={c.wrapper}>
      <form className={c.formWrapper}>
        <Select
          handleSelectChange={value => setSelectValue(value)}
          label={'Choose A Question Format'}
          options={options}
          selectedValue={selectValue}
        />
        <div className={c.formRow}>
          <TextField label={'Question'} />
          {selectValue === 'Picture' && <FileUploaderWithImage />}
        </div>
        <div className={c.formRow}>
          <TextField label={'Answer'} />
          {selectValue === 'Picture' && <FileUploaderWithImage />}
        </div>
      </form>
      <FormButtons
        changeModalState={changeModalState}
        primaryButtonText={'Add New Card'}
        withSecondary={withSecondary}
      />
    </div>
  )
}

type AddNewCardFormProps = {
  changeModalState: () => void
  withSecondary?: boolean
}
