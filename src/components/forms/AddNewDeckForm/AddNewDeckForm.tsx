import { Checkbox } from '@/components/ui/checkbox'
import { FileUploaderWithImage } from '@/components/ui/file-uploader-with-image-block'
import { FormButtons } from '@/components/ui/form-buttons'
import { SuperInput } from '@/components/ui/input'

import c from './AddNewDeckForm.module.scss'

export const AddNewDeckForm = ({ changeModalState, withSecondary }: AddNewDeckFormProps) => {
  return (
    <div className={c.wrapper}>
      <form className={c.formWrapper}>
        <FileUploaderWithImage text={'Change Cover'} />
        <SuperInput label={'Pack Name'} />
        <Checkbox checked={false} label={'Private Pack'} />
      </form>
      <FormButtons
        changeModalState={changeModalState}
        primaryButtonText={'Add New Deck'}
        withSecondary={withSecondary}
      />
    </div>
  )
}

type AddNewDeckFormProps = {
  changeModalState: (open: boolean) => void
  withSecondary: boolean
}
