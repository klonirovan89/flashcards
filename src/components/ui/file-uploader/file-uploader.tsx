import { useRef, useState } from 'react'

import { ButtonWithIcon } from '@/components/ui/button-with-icon'
import { TextField } from '@/components/ui/text-field/input'

export const FileUploader = (props: PropsType) => {
  const { iconId, text } = props

  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileInputChange = (event: any) => {
    const file = event.target.files && event.target.files[0]

    setSelectedFile(file)
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <>
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
      {selectedFile}
    </>
  )
}

type PropsType = {
  iconId?: string
  text?: string
}
