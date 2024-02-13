import { ReactNode, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import c from './modal.module.scss'

import { Button } from '../button'
import { Icon } from '../icon/Icon'
import { Typography } from '../typography'

type SuperModalProps = {
  children: ReactNode
  open: boolean
  setOpen: (value: boolean) => void
  title: string
  withSecondary: boolean
  withTrigger: boolean
}

export const SuperModal = ({
  children,
  open,
  setOpen,
  title,
  withSecondary,
  withTrigger,
}: SuperModalProps) => {
  const [tempOpen, setTempOpen] = useState<boolean>(open)

  return (
    <Dialog.Root onOpenChange={() => setTempOpen(!tempOpen)} open={tempOpen}>
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
              <Icon iconId={'Cross'} />
            </Dialog.Close>
          </div>
          <div className={c.content}>{children}</div>
          {withSecondary ? (
            <div className={c.footer}>
              <Button onClick={() => setTempOpen(!tempOpen)} variant={'secondary'}>
                <Typography variant={'subtitle2'}>Cancel</Typography>
              </Button>
              <Button variant={'primary'}>
                <Typography variant={'subtitle2'}>{title}</Typography>
              </Button>
            </div>
          ) : (
            <div className={c.footer}>
              <Button variant={'primary'}>
                <Typography variant={'subtitle2'}>{title}</Typography>
              </Button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
