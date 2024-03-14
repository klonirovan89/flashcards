import { Typography } from '@/components/ui/typography'
import { ListValuesType } from '../../../features/decks/filterDecks'
import * as RadixTabsSwitcher from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

export const TabSwitcher = (props: PropsType) => {
  const { listValues, onChangeTabSwitcherValue, tabSwitcherValue, text } = props

  return (
    <div className={s.wrapper}>
      <Typography variant={'body2'}>{text}</Typography>
      <RadixTabsSwitcher.Root
        className={s.root}
        onValueChange={onChangeTabSwitcherValue}
        value={tabSwitcherValue}
      >
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
    </div>
  )
}

type PropsType = {
  listValues: ListValuesType[]
  onChangeTabSwitcherValue?: (value: string) => void
  tabSwitcherValue?: string
  text: string
}
