import { Typography } from '@/components/ui/typography'
import * as RadixTabsSwitcher from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

export const TabSwitcher = (props: PropsType) => {
  const { listValues, onValueChange, value } = props

  return (
    <RadixTabsSwitcher.Root className={s.root} onValueChange={onValueChange} value={value}>
      <RadixTabsSwitcher.List>
        {listValues.map(el => (
          <RadixTabsSwitcher.Trigger
            className={s.trigger}
            disabled={el.disabled}
            key={el.value}
            value={el.value}
          >
            <Typography className={s.typographyStyle} variant={'body1'}>
              {el.text}
            </Typography>
          </RadixTabsSwitcher.Trigger>
        ))}
      </RadixTabsSwitcher.List>
    </RadixTabsSwitcher.Root>
  )
}

type PropsType = {
  listValues: {
    disabled: boolean
    text: string
    value: string
  }[]
  onValueChange: (value: string) => void
  value: string
}
