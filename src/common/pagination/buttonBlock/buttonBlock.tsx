import { Typography } from '@/components/ui/typography'

import s from './../../pagination/buttonBlock/buttonBlock.module.scss'

export type PropsType = {
  countPage: number
  handleChange: (value: number) => void
  handleChangeArrow: (step: number) => void
  numbers: number[]
  selectedPage: number
}

export const ButtonBlock = (props: PropsType) => {
  const { countPage, handleChange, handleChangeArrow, numbers, selectedPage } = props

  return (
    <div className={s.pagination}>
      <button
        className={selectedPage === 1 ? s.arrow : s.arrowActive}
        disabled={selectedPage === 1}
        onClick={() => handleChangeArrow(-1)}
      >
        {'❮'}
      </button>
      {numbers.map((el, index) => {
        if (countPage <= 6) {
          return (
            <button
              className={selectedPage === el ? s.btnActive : s.btn}
              key={index}
              onClick={() => handleChange(index + 1)}
            >
              <Typography
                className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                variant={'body2'}
              >
                {el}
              </Typography>
            </button>
          )
        } else {
          if (selectedPage <= 3) {
            if (el <= 5) {
              return (
                <button
                  className={
                    selectedPage === 1 && index === 0
                      ? s.btnActive
                      : selectedPage === el
                      ? s.btnActive
                      : s.btn
                  }
                  disabled={selectedPage === el}
                  key={index}
                  onClick={() => handleChange(index + 1)}
                >
                  <Typography
                    className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                    variant={'body2'}
                  >
                    {el}
                  </Typography>
                </button>
              )
            } else if (el === countPage) {
              return (
                <button
                  className={selectedPage === el ? s.btnActive : s.btn}
                  disabled={selectedPage === el}
                  key={index}
                  onClick={() => handleChange(index + 1)}
                >
                  <Typography
                    className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                    variant={'body2'}
                  >
                    {el}
                  </Typography>
                </button>
              )
            } else if (el === 6) {
              return (
                <span className={s.span} key={index}>
                  ...
                </span>
              )
            }
          } else if (selectedPage >= countPage - 2) {
            if (el === 1) {
              return (
                <button
                  className={selectedPage === el ? s.btnActive : s.btn}
                  disabled={selectedPage === el}
                  key={index}
                  onClick={() => handleChange(index + 1)}
                >
                  <Typography
                    className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                    variant={'body2'}
                  >
                    {el}
                  </Typography>
                </button>
              )
            } else if (el >= countPage - 4) {
              return (
                <button
                  className={selectedPage === el ? s.btnActive : s.btn}
                  disabled={selectedPage === el}
                  key={index}
                  onClick={() => handleChange(index + 1)}
                >
                  <Typography
                    className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                    variant={'body2'}
                  >
                    {el}
                  </Typography>
                </button>
              )
            } else if (el === countPage - 5) {
              return (
                <span className={s.span} key={index}>
                  ...
                </span>
              )
            }
          } else {
            if (el === 1) {
              return (
                <button
                  className={selectedPage === el ? s.btnActive : s.btn}
                  disabled={selectedPage === el}
                  key={index}
                  onClick={() => handleChange(index + 1)}
                >
                  <Typography
                    className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                    variant={'body2'}
                  >
                    {el}
                  </Typography>
                </button>
              )
            } else if (el === countPage) {
              return (
                <button
                  className={selectedPage === el ? s.btnActive : s.btn}
                  disabled={selectedPage === el}
                  key={index}
                  onClick={() => handleChange(index + 1)}
                >
                  <Typography
                    className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                    variant={'body2'}
                  >
                    {el}
                  </Typography>
                </button>
              )
            } else if (el === selectedPage - 1 || el === selectedPage || el === selectedPage + 1) {
              return (
                <button
                  className={selectedPage === el ? s.btnActive : s.btn}
                  disabled={selectedPage === el}
                  key={index}
                  onClick={() => handleChange(index + 1)}
                >
                  <Typography
                    className={selectedPage === el ? s.typographyStyleActive : s.typographyStyle}
                    variant={'body2'}
                  >
                    {el}
                  </Typography>
                </button>
              )
            } else if (el === 2 || el === countPage - 1) {
              return (
                <span className={s.span} key={index}>
                  ...
                </span>
              )
            }
          }

          return null
        }
      })}
      <button
        className={selectedPage === countPage ? s.arrow : s.arrowActive}
        disabled={selectedPage === countPage}
        onClick={() => handleChangeArrow(1)}
      >
        {'❯'}
      </button>
    </div>
  )
}
