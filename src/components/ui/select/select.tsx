import { Icon } from '@/components/ui/icon/Icon'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'

import s from '../select/select.module.scss'

export const Select = (props: PropsType) => {
  const { classForPagination, disabled, handleSelectChange, label, selectedValue, valuesList } =
    props

  return (
    <div className={s.container}>
      {label && <Typography variant={'body2'}>{label}</Typography>}
      <RadixSelect.Root
        defaultValue={selectedValue}
        onValueChange={value => handleSelectChange(value)}
      >
        <RadixSelect.Trigger
          className={classForPagination ? `${s.triggerPagination} ${s.trigger}` : s.trigger}
          disabled={disabled}
        >
          <RadixSelect.Value placeholder={selectedValue} />
          <div className={s.arrow}>
            <Icon height={'16px'} iconId={'Arrow'} width={'16px'} />
          </div>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content position={'popper'} sideOffset={-1}>
            <RadixSelect.Viewport
              className={classForPagination ? `${s.viewportPagination} ${s.viewport}` : s.viewport}
            >
              {valuesList.map((el, index) => (
                <RadixSelect.Item className={s.item} key={index} value={el.label}>
                  <RadixSelect.ItemText>
                    <Typography className={s.typographyStyle} variant={'body2'}>
                      {el.label}
                    </Typography>
                  </RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  )
}

type valuesListType = {
  label: string
  value: string
}

export type PropsType = {
  classForPagination?: boolean
  disabled?: boolean
  handleSelectChange: (value: string) => void
  label?: string
  selectedValue?: string
  valuesList: valuesListType[]
}
