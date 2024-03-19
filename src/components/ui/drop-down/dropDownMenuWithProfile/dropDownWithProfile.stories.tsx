import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropDownMenuWithProfile } from '@/components/ui/drop-down/dropDownMenuWithProfile/dropDownWithProfile'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import s from '@/components/ui/drop-down/dropDownMenuWithProfile/dropDownWithProfile.module.scss'

const meta = {
  component: DropDownMenuWithProfile,
  tags: ['autodocs'],
  title: 'Components/Dropdown Menu with Profile',
} satisfies Meta<typeof DropDownMenuWithProfile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: '',
    email: 'klonirovan_1@mail.ru',
    userName: 'Pasha Vandam',
  },
  render: args => {
    return (
      <div className={s.container}>
        <RadixDropdownMenu.Root>
          <RadixDropdownMenu.Trigger className={s.trigger}>
            <Avatar src={args.avatar} userName={args.userName} />
          </RadixDropdownMenu.Trigger>
          <RadixDropdownMenu.Portal>
            <RadixDropdownMenu.Content align={'end'} className={s.content} sideOffset={8}>
              <div className={s.itemProfile}>
                <Avatar src={args.avatar} userName={args.userName} />
                <div className={s.userData}>
                  <Typography variant={'subtitle2'}>{args.userName}</Typography>
                  <Typography className={s.typographyStyleEmail} variant={'caption'}>
                    {args.email}
                  </Typography>
                </div>
              </div>
              <RadixDropdownMenu.Item className={s.menuItem}>
                <Button className={s.item} onClick={() => alert('Здесь роут')} variant={'pure'}>
                  <div className={s.icon}>
                    <Icon height={'16px'} iconId={'User'} width={'16px'} />
                  </div>
                  <Typography className={s.typographyStyle} variant={'caption'}>
                    My Profile
                  </Typography>
                </Button>
                <Button className={s.item} onClick={args.logout} variant={'pure'}>
                  <div className={s.icon}>
                    <Icon height={'16px'} iconId={'Logout'} width={'16px'} />
                  </div>
                  <Typography className={s.typographyStyle} variant={'caption'}>
                    Sign Out
                  </Typography>
                </Button>
              </RadixDropdownMenu.Item>
              <RadixDropdownMenu.Arrow />
            </RadixDropdownMenu.Content>
          </RadixDropdownMenu.Portal>
        </RadixDropdownMenu.Root>
      </div>
    )
  },
}

export const WithAvatar: Story = {
  args: {
    avatar: 'src/components/ui/avatar/image/Sem.jpg',
    email: 'klonirovan_1@mail.ru',
    userName: 'Pasha Vandam',
  },
  render: args => {
    return (
      <div className={s.container}>
        <RadixDropdownMenu.Root>
          <RadixDropdownMenu.Trigger className={s.trigger}>
            <Avatar src={args.avatar} userName={args.userName} />
          </RadixDropdownMenu.Trigger>
          <RadixDropdownMenu.Portal>
            <RadixDropdownMenu.Content align={'end'} className={s.content} sideOffset={8}>
              <div className={s.itemProfile}>
                <Avatar src={args.avatar} userName={args.userName} />
                <div className={s.userData}>
                  <Typography variant={'subtitle2'}>{args.userName}</Typography>
                  <Typography className={s.typographyStyleEmail} variant={'caption'}>
                    {args.email}
                  </Typography>
                </div>
              </div>
              <RadixDropdownMenu.Item className={s.menuItem}>
                <Button className={s.item} onClick={() => alert('Здесь роут')} variant={'pure'}>
                  <div className={s.icon}>
                    <Icon height={'16px'} iconId={'User'} width={'16px'} />
                  </div>
                  <Typography className={s.typographyStyle} variant={'caption'}>
                    My Profile
                  </Typography>
                </Button>
                <Button className={s.item} onClick={args.logout} variant={'pure'}>
                  <div className={s.icon}>
                    <Icon height={'16px'} iconId={'Logout'} width={'16px'} />
                  </div>
                  <Typography className={s.typographyStyle} variant={'caption'}>
                    Sign Out
                  </Typography>
                </Button>
              </RadixDropdownMenu.Item>
              <RadixDropdownMenu.Arrow />
            </RadixDropdownMenu.Content>
          </RadixDropdownMenu.Portal>
        </RadixDropdownMenu.Root>
      </div>
    )
  },
}
