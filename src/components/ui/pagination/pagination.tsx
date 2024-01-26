import Pagination from "@mui/material/Pagination";
import * as Select from "@radix-ui/react-select";
import { useEffect, useState } from "react";
import s from "../pagination/pagination.module.scss";
import { Typography } from "@/components/ui/typography";
import LayerDown from "./icons/selectIcons/LayerDown.svg";

type ValuesType = {
  name: string
}

export const PaginationControl = () => {

  const values: ValuesType[] = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
    { name: "11" },
    { name: "12" },
    { name: "13" },
    { name: "14" },
    { name: "15" },
    { name: "16" },
    { name: "17" },
    { name: "18" },
    { name: "19" },
    { name: "20" },
    { name: "21" },
    { name: "22" },
    { name: "23" },
    { name: "24" },
    { name: "25" },
    { name: "26" },
    { name: "27" },
    { name: "28" },
    { name: "29" },
    { name: "30" },
    { name: "31" },
    { name: "32" },
    { name: "33" },
    { name: "34" },
    { name: "35" },
    { name: "36" },
    { name: "37" },
    { name: "38" },
    { name: "39" },
    { name: "40" },
    { name: "41" },
    { name: "42" },
    { name: "43" },
    { name: "44" },
    { name: "45" },
    { name: "46" },
    { name: "47" },
    { name: "48" },
    { name: "49" },
    { name: "50" },
  ];

  const listNumberValues = ["5", "10", "15", "20", "100"];

  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [selectedValue, setSelectedValue] = useState<string>(listNumberValues[0]);
  const [valuesPage, setValuesPage] = useState<ValuesType[]>(values);
  const [countPage, setCountPage] = useState<number>(20)

  console.log(selectedPage);

  const handleChange = (_: unknown, value: number) => {
    setSelectedPage(value);
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    const valuesForPage: ValuesType[] = [];
      values.filter((el) => {
        valuesForPage.length < +selectedValue? valuesForPage.push(el) : '';
    })
    setValuesPage(valuesForPage)
    setCountPage(Math.ceil(values.length / valuesForPage.length))
  }, [selectedValue]);


  useEffect(() => {
    const startIndex = (selectedPage - 1) * parseInt(selectedValue);
    const endIndex = startIndex + parseInt(selectedValue);
    const valuesForPage = values.slice(startIndex, endIndex);
    setValuesPage(valuesForPage);
  }, [selectedPage, selectedValue]);

  return (
    <div className={s.pagination}>
      {valuesPage.map((el, index) => (
        <div key={index}>{el.name}</div>
      ))}

      <Pagination count={countPage} onChange={handleChange} />

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
  );
};


