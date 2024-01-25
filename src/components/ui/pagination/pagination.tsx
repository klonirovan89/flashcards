import Pagination from "@mui/material/Pagination";
import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import s from "../pagination/pagination.module.scss";
import { Typography } from "@/components/ui/typography";
import LayerDown from "./icons/selectIcons/LayerDown.svg";

export const PaginationControl = () => {

  const [selectedPage, setSelectedPage] = useState(1);
  const handleChange = (_: unknown, value: number) => {
    setSelectedPage(value)
    console.log(`Page changed to ${value}`);
  };

  const listNumberValues = ["10", "20", "30", "50", "100"];
  const [selectedValue, setSelectedValue] = useState(listNumberValues[1]);
    const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log(`Selected value: ${value}`);
  };



  return (
    <div className={s.pagination}>
      <Pagination count={55} onChange={handleChange} />

      <Select.Root defaultValue={listNumberValues[1]} onValueChange={(value) => handleSelectChange(value)}>
        <Select.Trigger className={s.trigger}>
          <Select.Value className={s.selectValue}>
            {selectedValue}
            <img src={LayerDown} alt="Custom Arrow" />
          </Select.Value>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content position="popper" sideOffset={0}>
            <Select.Viewport className={s.viewport}>
              {listNumberValues.map((el: string) => (
                <Select.Item value={el}>
                  <Select.ItemText className={s.itemText}>
                    <Typography className={s.typographyStyle} variant={"body2"}>{el}</Typography>
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      <Typography variant={'body2'}>
        Current page: {selectedPage}
      </Typography>
      <Typography variant={'body2'}>
        Сurrent number values on the page: {selectedValue}
      </Typography>
    </div>
  );
};
