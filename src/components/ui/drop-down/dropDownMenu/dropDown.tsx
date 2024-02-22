import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

export const DropDownMenu = (props: PropsType) => {
  const { value } = props

  return (
    <div className={s.container}>
      <div>Click me:</div>
      <RadixDropdownMenu.Root>
        <RadixDropdownMenu.Trigger className={s.trigger}>
          <Icon height={'24px'} iconId={'verticalOutline'} width={'24px'} />
        </RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Portal>
          <RadixDropdownMenu.Content align={'end'} className={s.content} sideOffset={2}>
            {value.map((el, index) => (
              <RadixDropdownMenu.Item className={s.menuItem} key={index}>
                <Button className={s.item} onClick={() => alert('play')} variant={'pure'}>
                  <div className={s.icon}>
                    <Icon height={'16px'} iconId={el.id} width={'16px'} />
                  </div>
                  <Typography className={s.typographyStyle} variant={'caption'}>
                    {el.label}
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
  value: ValuesType[]
}

type ValuesType = {
  id: string
  label: string
}
