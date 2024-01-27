import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import s from "../pagination/pagination.module.scss";
import { Typography } from "@/components/ui/typography";
import { SelectControl } from "@/components/ui/select";

type ListNumberValuesType = {
  value: string
  label: string
}

export type PropsType = {
  values: ValuesType[]
  listNumberValues: ListNumberValuesType[]
  label: string
}

export type ValuesType = {
  name: string
}

export const PaginationControl = (props: PropsType) => {
  const { values, listNumberValues , label} = props;

  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [selectedValue, setSelectedValue] = useState<string>(listNumberValues[0].label);
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
      {label && <Typography variant={"body2"}>{label}</Typography>}
      <div>
        {valuesPage.map((el, index) => (
          <Typography variant={"body2"} key={index}>{el.name}</Typography>
        ))}
      </div>
      <div className={s.pagination}>
        <Pagination count={countPage} page={selectedPage} onChange={handleChange} />
        <SelectControl selectedValue={selectedValue} handleSelectChange={handleSelectChange} listValues={listNumberValues}/>
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


