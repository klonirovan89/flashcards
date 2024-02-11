import { useEffect, useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Select } from "@/components/ui/select";
import s from "../pagination/pagination.module.scss";
import { ButtonBlock } from "@/components/ui/pagination/buttonBlock/buttonBlock";


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
  const { values, listNumberValues, label } = props;

  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [selectedValue, setSelectedValue] = useState<string>(listNumberValues[0].label);
  const [valuesPage, setValuesPage] = useState<ValuesType[]>(values);
  const [countPage, setCountPage] = useState<number>(1);

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

  const handleChange = (value: number) => {
    setSelectedPage(value);
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleChangeArrow = (step: number) => {
    setSelectedPage((prevPage) => Math.max(1, Math.min(prevPage + step, countPage)));
  };

  const numbers: number[] = [];
  for (let i = 1; i <= countPage; i++) {
    numbers.push(i);
  }

  return (
    <div>
      {label && <Typography variant={"body2"}>{label}</Typography>}
      <div className={s.pagination}>
        {valuesPage.map((el, index) => (
          <Typography variant={"body2"} key={index}>{el.name}</Typography>
        ))}
      </div>
      <div className={s.pagination}>
          <ButtonBlock
            selectedPage={selectedPage}
            handleChangeArrow={handleChangeArrow}
            handleChange={handleChange}
            numbers={numbers}
            countPage={countPage}
          />
          <div className={s.select}>
            <Typography className={s.typographyStyle} variant={"body2"}>
              Show
            </Typography>
            <Select
              selectedValue={selectedValue}
              handleSelectChange={handleSelectChange}
              valuesList={listNumberValues}
              classForPagination={true}
            />
            <Typography className={s.typographyStyle} variant={"body2"}>
              on the page
            </Typography>
          </div>
        <Typography className={s.typographyStyle} variant={"body2"}>
          Current page: {selectedPage}
        </Typography>
        <Typography className={s.typographyStyle} variant={"body2"}>
          Сurrent number values on the page: {selectedValue}
        </Typography>
      </div>
    </div>
  );
};


