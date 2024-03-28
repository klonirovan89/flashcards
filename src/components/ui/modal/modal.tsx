import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import * as Dialog from '@radix-ui/react-dialog'

import c from './modal.module.scss'

import { Button } from '../button'
import { Icon } from '../icon/Icon'
import { Typography } from '../typography'

export const SuperModal = ({
  changeModalState,
  children,
  open,
  title,
  withTrigger = true,
}: SuperModalProps) => {
  return (
    <Dialog.Root onOpenChange={changeModalState} open={open}>
      {withTrigger && (
        <Dialog.Trigger className={c.trigger}>
          <Button as={'span'} variant={'primary'}>
            <Typography variant={'subtitle2'}>{title}</Typography>
          </Button>
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className={c.overlay}>
          <ToastContainer
            autoClose={3000}
            closeOnClick
            containerId={'modalId'}
            draggable
            pauseOnHover
            position={'bottom-left'}
            theme={'dark'}
          />
          <Dialog.Content className={c.root}>
            <div className={c.header}>
              <Dialog.Title className={c.title}>
                <Typography variant={'h3'}>{title}</Typography>
              </Dialog.Title>
              <Dialog.Close className={c.close}>
                <Icon height={'22px'} iconId={'Cross'} width={'22px'} />
              </Dialog.Close>
            </div>
            <div className={c.content}>{children}</div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

type SuperModalProps = {
  changeModalState: () => void
  children: ReactNode
  open: boolean
  title: string
  withTrigger: boolean
}
