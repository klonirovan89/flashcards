import { useRef } from 'react'
import { toast } from 'react-toastify'

import { ButtonWithIcon } from '@/components/ui/button-with-icon'
import { TextField } from '@/components/ui/text-field/text-field'

export const FileUploader = (props: PropsType) => {
  const { className, iconId, setFile, text } = props

  const fileInputRef = useRef<HTMLInputElement>(null)

  const MAX_FILE_SIZE = 1048576
  const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif']

  const handleFileInputChange = (event: any) => {
    const file = event.target.files && event.target.files[0]

    if (file) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error('Only image/jpeg, image/png, image/gif formats are supported.')

        return
      }

      if (file.size > MAX_FILE_SIZE) {
        toast.error('Max image size is 1 MB.')

        return
      }

      setFile?.(file)
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className={className}>
      <TextField
        onChange={handleFileInputChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type={'file'}
      />
      <ButtonWithIcon
        iconId={iconId}
        onClick={handleButtonClick}
        text={text}
        variant={'secondary'}
      />
    </div>
  )
}

type PropsType = {
  className?: string
  iconId?: string
  setFile?: (file: File) => void
  text?: string
}
