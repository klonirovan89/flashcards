import * as Checkbox from '@radix-ui/react-checkbox';
import s from './checkbox.module.scss'
import { CheckIcon } from '@radix-ui/react-icons';
import { Typography } from "@/components/ui/typography";

export type CheckboxProps = {
  onChange?: () => void
  checked?: boolean
  disabled?: boolean
  label?: string
  variant?: string
}

export const CheckboxControl = (props: CheckboxProps) => {
  const { checked, disabled, label, onChange } = props

  return (
    <div className={s.checkbox}>
      <Checkbox.Root className={s.CheckboxRoot} defaultChecked id="c1" checked={checked} disabled={disabled} onCheckedChange={onChange}>
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <Typography variant={'body2'}>{label}</Typography>
    </div>
  )
}
