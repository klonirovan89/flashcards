import { useState } from 'react'

import { EditProfileArgs, EditProfileForm } from '@/components/auth/edit-profile/edit-profile'
import { useSetMeMutation } from '@/pages/auth/api/auth-api'

export const MyProfilePage = () => {
  const [setName] = useSetMeMutation()
  const [editMode, setEditMode] = useState<boolean>(false)

  const onSubmit = ({ name }: EditProfileArgs) => {
    setName({ name })
    setEditMode(!editMode)
  }

  return <EditProfileForm editMode={editMode} onSubmit={onSubmit} setEditMode={setEditMode} />
}
