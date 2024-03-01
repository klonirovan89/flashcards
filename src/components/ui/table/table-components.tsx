import s from './table.module.scss'

const Root = ({ ...rest }) => {
  return <table className={s.root} {...rest} />
}

const Head = ({ ...rest }) => {
  return <thead className={s.head} {...rest} />
}

const HeadCell = ({ ...rest }) => {
  return <th className={s.headCell} {...rest} />
}

const Body = ({ ...rest }) => {
  return <tbody className={s.body} {...rest} />
}

const Row = ({ ...rest }) => {
  return <tr className={s.row} {...rest} />
}

const Cell = ({ ...rest }) => {
  return <td className={s.cell} {...rest} />
}

const Empty = ({ ...rest }) => {
  return <div className={s.empty} {...rest} />
}

export const TableComponents = { Body, Cell, Empty, Head, HeadCell, Root, Row }
