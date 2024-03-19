import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { DropDownMenuWithProfile } from '@/components/ui/drop-down/dropDownMenuWithProfile'
import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/header/header.module.scss'

import { Header } from './'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const UserIsAuthorized: Story = {
  args: {
    avatar: 'src/components/ui/avatar/image/Sem.jpg',
    email: 'klonirovan_1@mail.ru',
    isLoggedIn: true,
    logout: () => alert('Здесь должен быть роут'),
    userName: 'Pasha Vandam',
  },
  render: args => {
    return (
      <div className={s.wrapper}>
        <div className={s.container}>
          <Button
            className={s.buttonLogo}
            onClick={() => alert('Здесь должен быть роут')}
            variant={'link'}
          >
            <Icon height={'60px'} iconId={'Logo'} width={'60px'} />
            <Typography variant={'h2'}>CARDS</Typography>
          </Button>
          {args.isLoggedIn ? (
            <div className={s.dropDown}>
              <DropDownMenuWithProfile
                avatar={args.avatar}
                email={args.email}
                logout={args.logout}
                userName={args.userName}
              />
              <Typography as={'a'} variant={'subtitle1'}>
                {args.userName}
              </Typography>
            </div>
          ) : (
            <Button variant={'primary'}>Sign In</Button>
          )}
        </div>
      </div>
    )
  },
}

export const UserIsNotAuthorized: Story = {
  args: {
    avatar: 'src/components/ui/avatar/image/Sem.jpg',
    email: 'klonirovan_1@mail.ru',
    isLoggedIn: false,
    logout: () => alert('Здесь должен быть роут'),
    userName: 'Pasha Vandam',
  },
  render: args => {
    return (
      <div className={s.wrapper}>
        <div className={s.container}>
          <Button
            className={s.buttonLogo}
            onClick={() => alert('Здесь должен быть роут')}
            variant={'link'}
          >
            <Icon height={'60px'} iconId={'Logo'} width={'60px'} />
            <Typography variant={'h2'}>CARDS</Typography>
          </Button>
          {args.isLoggedIn ? (
            <div className={s.dropDown}>
              <DropDownMenuWithProfile
                avatar={args.avatar}
                email={args.email}
                logout={args.logout}
                userName={args.userName}
              />
              <Typography as={'a'} variant={'subtitle1'}>
                {args.userName}
              </Typography>
            </div>
          ) : (
            <Button variant={'primary'}>Sign In</Button>
          )}
        </div>
      </div>
    )
  },
}
