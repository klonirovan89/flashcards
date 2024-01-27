import * as Select from "@radix-ui/react-select";
import s from "../select/select.module.scss";
import { Typography } from "@/components/ui/typography";
import LayerDown from "./icons/selectIcons/LayerDown.svg";

type ListValuesType = {
  value: string
  label: string
}

export type PropsType = {
  selectedValue?: string
  handleSelectChange: (value: string) => void
  listValues: ListValuesType[]
  disabled?: boolean
  label?: string
}

export const SelectControl = (props: PropsType) => {
const {selectedValue, handleSelectChange, listValues, disabled, label} = props;

  return (
      <div className={s.select}>
        {label && <Typography variant={"body2"}>{label}</Typography>}
        <Select.Root defaultValue={selectedValue} onValueChange={(value) => handleSelectChange(value)} >
          <Select.Trigger disabled={disabled} className={s.trigger}>
            <Select.Value placeholder={selectedValue}/>
              <img className={s.img} src={LayerDown} alt="Layer Down" />
          </Select.Trigger>
          <Select.Portal className={s.portal}>
            <Select.Content position="popper" sideOffset={-1}>
              <Select.Viewport className={s.viewport}>
                {listValues.map((el, index) => (
                  <Select.Item key={index} value={el.label} className={s.item}>
                    <Select.ItemText>
                      <Typography className={disabled ? s.typographyStyleDisabled : s.typographyStyle} variant={"body2"}>{el.label}</Typography>
                    </Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
  );
};


