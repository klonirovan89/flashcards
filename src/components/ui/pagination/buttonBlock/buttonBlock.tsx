import { Typography } from "@/components/ui/typography";
import s from "./../../pagination/buttonBlock/buttonBlock.module.scss"

export type PropsType = {
  selectedPage: number
  handleChangeArrow: (step: number) => void
  handleChange: (value: number) => void
  numbers: number[]
  countPage: number
}

export const ButtonBlock = (props: PropsType) => {
  const {selectedPage, handleChangeArrow, handleChange, numbers, countPage} = props;


  return (
    <div className={s.pagination}>
      <button disabled={selectedPage === 1} className={selectedPage === 1 ? s.arrow : s.arrowActive}
              onClick={() => handleChangeArrow(-1)}>
        {"❮"}
      </button>
      {numbers.map((el, index) => {
        if (countPage <= 6) {
          return (
            <button
              className={selectedPage === el ? s.btnActive : s.btn} key={index}
              onClick={() => handleChange(index + 1)}>
              <Typography className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                          variant={"body2"}>{el}</Typography>
            </button>
          );
        } else {
          if (selectedPage <= 3) {
            if (el <= 5) {
              return (
                <button
                  disabled={selectedPage === el}
                  className={selectedPage === 1 && index === 0 ? s.btnActive : selectedPage === el ? s.btnActive : s.btn}
                  key={index} onClick={() => handleChange(index + 1)}>
                  <Typography className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                              variant={"body2"}>{el}</Typography>
                </button>
              );
            } else if (el === countPage) {
              return (
                <button
                  disabled={selectedPage === el}
                  className={selectedPage === el ? s.btnActive : s.btn} key={index}
                  onClick={() => handleChange(index + 1)}>
                  <Typography className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                              variant={"body2"}>{el}</Typography>
                </button>
              );
            } else if (el === 6) {
              return <span className={s.span} key={index}>...</span>;
            }
          } else if (selectedPage >= countPage - 2) {
            if (el === 1) {
              return (
                <button
                  disabled={selectedPage === el}
                  className={selectedPage === el ? s.btnActive : s.btn} key={index}
                  onClick={() => handleChange(index + 1)}>
                  <Typography className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                              variant={"body2"}>{el}</Typography>
                </button>
              );
            } else if (el >= countPage - 4) {
              return (
                <button disabled={selectedPage === el}
                        className={selectedPage === el ? s.btnActive : s.btn}
                        key={index}
                        onClick={() => handleChange(index + 1)}>
                  <Typography className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                              variant={"body2"}>{el}</Typography>
                </button>
              );
            } else if (el === countPage - 5) {
              return <span className={s.span} key={index}>...</span>;
            }
          } else {
            if (el === 1) {
              return (
                <button disabled={selectedPage === el}
                        className={selectedPage === el ? s.btnActive : s.btn}
                        key={index}
                        onClick={() => handleChange(index + 1)}>
                  <Typography className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                              variant={"body2"}>{el}</Typography>
                </button>
              );
            } else if (el === countPage) {
              return (
                <button disabled={selectedPage === el}
                        className={selectedPage === el ? s.btnActive : s.btn}
                        key={index}
                        onClick={() => handleChange(index + 1)}>
                  <Typography className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                              variant={"body2"}>{el}</Typography>
                </button>
              );
            } else if (el === selectedPage - 1 || el === selectedPage || el === selectedPage + 1) {
              return (
                <button disabled={selectedPage === el}
                        className={selectedPage === el ? s.btnActive : s.btn}
                        key={index}
                        onClick={() => handleChange(index + 1)}>
                  <Typography className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                              variant={"body2"}>{el}</Typography>
                </button>
              );
            } else if (el === 2 || el === countPage - 1) {
              return <span className={s.span} key={index}>...</span>;
            }
          }
          return null;
        }
      })}
      <button disabled={selectedPage === countPage} className={selectedPage === countPage ? s.arrow : s.arrowActive}
              onClick={() => handleChangeArrow(1)}>
        {"❯"}
      </button>
    </div>
  );
};
