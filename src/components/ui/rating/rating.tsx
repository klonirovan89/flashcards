import s from "./rating.module.scss";
import { Rating } from "@mui/material";

type PropsType = {
  defaultValue: number
}
export const RatingControl = (props: PropsType) => {

const {defaultValue} = props;


  return (
    <div className={s.rating}>
      <Rating defaultValue={defaultValue} precision={0.5} ></Rating>
    </div>
  );
};
