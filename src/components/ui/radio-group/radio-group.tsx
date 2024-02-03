import * as RadioGroup from "@radix-ui/react-radio-group";
import s from "./radio-group.module.scss";
import { Typography } from "@/components/ui/typography";


type PropsType = {
  onValueChange?: (value: string) => void
  disabled: boolean
  options: OptionsType[]
  selectedValue?: string
  errorMessage?: string
}

type OptionsType = {
  label: string
  value: string
}

export const RadioGroupControl = (props: PropsType) => {
  const { disabled, options, selectedValue, errorMessage, ...rest } = props;

  return (
    <RadioGroup.Root className={s.root} defaultValue="default" disabled={disabled} {...rest}>
      {options.map(el => (
        <div className={s.div} key={el.value}>
          <RadioGroup.Item className={s.item} value={el.value} checked={el.value === selectedValue}>
            <div className={s.frame}></div>
            <RadioGroup.Indicator className={s.indicator} />
          </RadioGroup.Item>
          <Typography variant={"body2"}>
            {el.label}
          </Typography>
        </div>
      ))}
      {errorMessage && (
        <Typography variant={"body2"} className={s.error}>
          {errorMessage}
        </Typography>
      )}
    </RadioGroup.Root>
  );
};
