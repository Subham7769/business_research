import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, abc, cde) {
  return { name, calories, fat, carbs, protein, abc, cde };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 67, 4.3, 67, 4.3),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell align="right">EXW</StyledTableCell>
            <StyledTableCell align="right">FCA</StyledTableCell>
            <StyledTableCell align="right">FAS</StyledTableCell>
            <StyledTableCell align="right">FOB</StyledTableCell>
            <StyledTableCell align="right">CFR</StyledTableCell>
            <StyledTableCell align="right">CIF</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.abc}</StyledTableCell>
              <StyledTableCell align="right">{row.cde}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
