import Pagination from "@mui/material/Pagination";
import * as Select from "@radix-ui/react-select";
import { useEffect, useState } from "react";
import s from "../pagination/pagination.module.scss";
import { Typography } from "@/components/ui/typography";
import LayerDown from "./icons/selectIcons/LayerDown.svg";


export type PropsType = {
  values: ValuesType[]
  listNumberValues: string[]
}

export type ValuesType = {
  name: string
}

export const PaginationControl = (props: PropsType) => {
  const { values, listNumberValues } = props;

  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [selectedValue, setSelectedValue] = useState<string>(listNumberValues[0]);
  const [valuesPage, setValuesPage] = useState<ValuesType[]>(values);
  const [countPage, setCountPage] = useState<number>(20);

  useEffect(() => {
    const startIndex = (selectedPage - 1) * +selectedValue;
    const endIndex = startIndex + +selectedValue;
    const valuesForPage = values.slice(startIndex, endIndex);
    setValuesPage(valuesForPage);
  }, [selectedPage, selectedValue, values]);

  useEffect(() => {
    const newCountPage = Math.ceil(values.length / +selectedValue);
    setCountPage(newCountPage);

    if (selectedPage > newCountPage) {
      setSelectedPage(newCountPage);
    }

    setValuesPage(values.slice(0, +selectedValue));
  }, [selectedValue, values]);

  const handleChange = (_: unknown, value: number) => {
    setSelectedPage(value);
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <div>
        {valuesPage.map((el, index) => (
          <div key={index}>{el.name}</div>
        ))}
      </div>
      <div className={s.pagination}>
        <Pagination count={countPage} page={selectedPage} onChange={handleChange} />
        <Select.Root defaultValue={selectedValue} onValueChange={(value) => handleSelectChange(value)}>
          <Select.Trigger className={s.trigger}>
            <Select.Value className={s.selectValue}>
              {selectedValue}
              <img src={LayerDown} alt="Custom Arrow" />
            </Select.Value>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content position="popper" sideOffset={0}>
              <Select.Viewport className={s.viewport}>
                {listNumberValues.map((el, index) => (
                  <Select.Item key={index} value={el}>
                    <Select.ItemText className={s.itemText}>
                      <Typography className={s.typographyStyle} variant={"body2"}>{el}</Typography>
                    </Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
        <Typography variant={"body2"}>
          Current page: {selectedPage}
        </Typography>
        <Typography variant={"body2"}>
          Сurrent number values on the page: {selectedValue}
        </Typography>
      </div>
    </div>
  );
};


