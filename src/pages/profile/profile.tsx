import { useState } from 'react'

import { EditProfileArgs, EditProfileForm } from '@/components/auth/edit-profile/edit-profile'
import { BackButton } from '@/components/ui/back-button'
import { useLogoutMutation, useSetMeMutation } from '@/pages/auth/api/auth-api'

import s from '@/pages/profile/profile.module.scss'

export const MyProfilePage = () => {
  const [setName] = useSetMeMutation()
  const [editMode, setEditMode] = useState<boolean>(false)

  const onSubmit = ({ name }: EditProfileArgs) => {
    setName({ name })
    setEditMode(!editMode)
  }

  const [signOut] = useLogoutMutation()

  return (
    <div className={s.wrapper}>
      <BackButton className={s.backButton} />
      <div className={s.section}>
        <EditProfileForm
          editMode={editMode}
          logout={signOut}
          onSubmit={onSubmit}
          setEditMode={setEditMode}
        />
      </div>
    </div>
  )
}
