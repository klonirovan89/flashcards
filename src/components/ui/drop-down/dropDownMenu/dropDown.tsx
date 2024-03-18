import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

export const DropDownMenu = (props: PropsType) => {
  const { options } = props
  const [open, setOpen] = useState(false)

  return (
    <div className={s.container}>
      <RadixDropdownMenu.Root onOpenChange={setOpen} open={open}>
        <RadixDropdownMenu.Trigger className={s.trigger}>
          <Icon height={'20px'} iconId={'verticalOutline'} width={'20px'} />
        </RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Portal>
          <RadixDropdownMenu.Content align={'end'} className={s.content} sideOffset={8}>
            {options.map((option, index) => (
              <RadixDropdownMenu.Item className={s.menuItem} key={index}>
                <Button className={s.item} onClick={() => option.handler()} variant={'pure'}>
                  <div className={s.icon}>
                    <Icon height={'16px'} iconId={option.id} width={'16px'} />
                  </div>
                  <Typography className={s.typographyStyle} variant={'body2'}>
                    {option.label}
                  </Typography>
                </Button>
              </RadixDropdownMenu.Item>
            ))}
            <span className={s.arrow}></span>
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root>
    </div>
  )
}

type PropsType = {
  options: {
    handler: () => void
    id: string
    label: string
  }[]
}
