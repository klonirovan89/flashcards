import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import c from './modal.module.scss'

import { Button } from '../button'
import { Icon } from '../icon/Icon'
import { Typography } from '../typography'

type SuperModalProps = {
  changeModalState: (open: boolean) => void
  children: ReactNode
  open: boolean
  title: string
  withTrigger: boolean
}

export const SuperModal = ({
  changeModalState,
  children,
  open,
  title,
  withTrigger,
}: SuperModalProps) => {
  return (
    <Dialog.Root onOpenChange={() => changeModalState(!open)} open={open}>
      {withTrigger && (
        <Dialog.Trigger className={c.trigger}>
          <Button variant={'primary'}>
            <Typography variant={'h3'}>{title}</Typography>
          </Button>
        </Dialog.Trigger>
      )}
      <Dialog.Portal>
        <Dialog.Overlay className={c.overlay} />
        <Dialog.Content className={c.root}>
          <div className={c.header}>
            <Dialog.Title className={c.title}>
              <Typography variant={'h3'}>{title}</Typography>
            </Dialog.Title>
            <Dialog.Close className={c.close}>
              <Icon height={'12px'} iconId={'Cross'} width={'12px'} />
            </Dialog.Close>
          </div>
          <div className={c.content}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
