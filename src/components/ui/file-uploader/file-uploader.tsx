import { useRef } from 'react'

import { ButtonWithIcon } from '@/components/ui/button-with-icon'
import { TextField } from '@/components/ui/text-field/text-field'

export const FileUploader = (props: PropsType) => {
  const { className, iconId, setFile, text } = props

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileInputChange = (event: any) => {
    const file = event.target.files && event.target.files[0]

    setFile?.(file)
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
