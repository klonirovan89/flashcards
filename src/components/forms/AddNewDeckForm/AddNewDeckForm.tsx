import { Checkbox } from '@/components/ui/checkbox'
import { FileUploaderWithImage } from '@/components/ui/file-uploader-with-image-block'
import { SuperInput } from '@/components/ui/input'

import c from './AddNewDeckForm.module.scss'

export const AddNewDeckForm = ({}: AddNewDeckFormProps) => {
  return (
    <form className={c.wrapper}>
      <FileUploaderWithImage text={'Change Cover'} />
      <SuperInput label={'Pack Name'} />
      <Checkbox checked={false} label={'Private Pack'} />
    </form>
  )
}

type AddNewDeckFormProps = {}
