import React, { useRef, useState } from 'react'

import { ButtonWithIcon } from '@/components/ui/button-with-icon'
import { TextField } from '@/components/ui/text-field/text-field'

import s from './file-uploader-with-image.module.scss'

export const FileUploaderWithImage = (props: PropsType) => {
  const { cover, handleSetCover, name } = props

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imageSrc, setImageSrc] = useState(cover)

  const MAX_FILE_SIZE = 1048576 // 1MB in bytes
  const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif']

  const handleFileInputChange = (event: any) => {
    const file = event.target.files && event.target.files[0]

    if (file) {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        alert('Only image/jpeg, image/png, image/gif formats are supported.')

        return
      }

      if (file.size > MAX_FILE_SIZE) {
        alert('Max image size is 1 MB.')

        return
      }

      handleSetCover && handleSetCover(file)
      const reader = new FileReader()

      reader.onloadend = () => {
        if (reader.result) {
          setImageSrc(reader.result as string)
        }
      }
      reader.readAsDataURL(file)
    } else {
      setImageSrc('')
      handleSetCover && handleSetCover(null)
    }
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const deleteImageSrc = () => {
    setImageSrc('')
    handleSetCover && handleSetCover(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className={s.container}>
      <img
        alt={'No photo'}
        className={s.img}
        src={
          imageSrc
            ? imageSrc
            : 'https://img.freepik.com/free-photo/red-prohibited-sign-no-icon-warning-or-stop-symbol-safety-danger-3d-illustration_56104-1991.jpg'
        }
      />
      <TextField
        name={name}
        onChange={handleFileInputChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
        type={'file'}
      />
      {imageSrc ? (
        <div className={s.buttonBlock}>
          <ButtonWithIcon
            iconId={'Layer'}
            onClick={handleButtonClick}
            text={'Change cover'}
            variant={'secondary'}
          />
          <ButtonWithIcon
            iconId={'Delete'}
            onClick={deleteImageSrc}
            text={'Delete file'}
            variant={'secondary'}
          />
        </div>
      ) : (
        <ButtonWithIcon
          className={s.buttonBlock}
          fullWidth
          iconId={'Layer'}
          onClick={handleButtonClick}
          text={'Change cover'}
          type={'button'}
          variant={'secondary'}
        />
      )}
    </div>
  )
}

type PropsType = {
  cover?: null | string
  handleSetCover?: (file: File | null) => void
  name?: string
}
