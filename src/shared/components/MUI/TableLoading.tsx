import { Skeleton, TableCell, TableRow } from '@mui/material'

interface IProps {
  rowsNum?: number
}
const TableRowsLoader: React.FC<IProps> = ({ rowsNum = 1 }) => {
  return (
    <>
      {[...Array(rowsNum)].map((row, index) => (
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

export default TableRowsLoader
