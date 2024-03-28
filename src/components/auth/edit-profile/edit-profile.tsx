import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { ButtonWithIcon } from '@/components/ui/button-with-icon'
import { Card } from '@/components/ui/card'
import { FileUploader } from '@/components/ui/file-uploader'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import { ControlledTextField } from '@/controlled/controlled-text-field/controlled-text-field'
import { useGetMeQueryState, useSetMeMutation } from '@/pages/auth/api/auth-api'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import c from './edit-profile.module.scss'

const editProfileSchema = z.object({
  name: z.string().min(2).max(20),
})

export const EditProfileForm = ({
  editMode,
  logout,
  onSubmit,
  setEditMode,
}: EditProfileFormProps) => {
  const { data: me } = useGetMeQueryState()

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      name: me?.name || '',
    },
    resolver: zodResolver(editProfileSchema),
  })

  return (
    <Card className={c.card}>
      <Typography variant={'h1'}>Personal Information</Typography>
      <ProfileAvatar isEditMode={editMode} />
      {!editMode ? (
        <>
          <div className={c.name}>
            <Typography variant={'h2'}>{me?.name}</Typography>
            <Button className={c.button} onClick={() => setEditMode(!editMode)} variant={'pure'}>
              <Icon height={'16px'} iconId={'Edit'} width={'16px'} />
            </Button>
          </div>
          <Typography className={c.email} variant={'body2'}>
            {me?.email}
          </Typography>
          <ButtonWithIcon
            iconId={'Logout'}
            onClick={logout}
            text={'Logout'}
            variant={'secondary'}
          />
        </>
      ) : (
        <form className={c.form} onSubmit={handleSubmit(onSubmit)}>
          <ControlledTextField
            control={control}
            defaultValue={''}
            errorMessage={errors.name?.message}
            label={'Nickname'}
            name={'name'}
            type={'default'}
          />
          <Button type={'submit'} variant={'primary'}>
            <Typography variant={'subtitle2'}>Save Changes</Typography>
          </Button>
        </form>
      )}
    </Card>
  )
}

const ProfileAvatar = ({ isEditMode }: AvatarProps) => {
  const [setNewImage] = useSetMeMutation()
  const { data } = useGetMeQueryState()

  const src = data?.avatar

  const setFile = async (file: File) => {
    await setNewImage({ avatar: file })
    toast.success('Successful download', { containerId: 'appId' })
  }

  return (
    <div className={c.avatar}>
      <img alt={'No Avatar'} className={c.image} src={src ?? ''} />
      {!isEditMode && <FileUploader className={c.edit} iconId={'edit'} setFile={setFile} />}
    </div>
  )
}

type AvatarProps = {
  avatar?: null | string
  isEditMode?: boolean
}

type FormValues = z.infer<typeof editProfileSchema>

type EditProfileFormProps = {
  editMode: boolean
  logout: () => void
  onSubmit: (name: EditProfileArgs) => void
  setEditMode: (editMode: boolean) => void
}

export type EditProfileArgs = {
  name: string
}
