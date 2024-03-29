import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ReasonsExtractor(selectionReason) {
  const Reasons = selectionReason.filter((item) => {
    if (item.status == true) {
      return item.name;
    }
  });
  const ReasonStr = Reasons.reduce((str, item) => {
    return str + "\n" + item;
  }, "");
  return ReasonStr;
}

function TableView({ products }) {
  return (
    <>
      {products.map((product) => (
        <TableContainer component={Paper} key={product.productId}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Product Name</StyledTableCell>
                <StyledTableCell align="center">HS Code</StyledTableCell>
                <StyledTableCell align="center">Selection</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {product.productName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {product.hsCode}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {ReasonsExtractor(product.selectionReason)}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Strength</StyledTableCell>
                <StyledTableCell align="center">Weakness</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key={product.name}>
                <StyledTableCell>
                  <TableBody>
                    <StyledTableRow key={product.name}>
                      {product.swot.strength.map((item, index) => (
                        <StyledTableCell key={item + index}>
                          {item}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  </TableBody>
                </StyledTableCell>
                <StyledTableCell>
                  <TableBody>
                    <StyledTableRow>
                      {product.swot.weakness.map((item, index) => (
                        <StyledTableCell key={item + index}>
                          {item}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  </TableBody>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Opportunities</StyledTableCell>
                <StyledTableCell align="center">Threats</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow key={product.name}>
                <StyledTableCell>
                  <TableBody>
                    <StyledTableRow key={product.name}>
                      {product.swot.opportunity.map((item, index) => (
                        <StyledTableCell key={item + index}>
                          {item}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  </TableBody>
                </StyledTableCell>
                <StyledTableCell>
                  <TableBody>
                    <StyledTableRow key={product.name}>
                      {product.swot.threat.map((item, index) => (
                        <StyledTableCell key={item + index}>
                          {item}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  </TableBody>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </>
  );
}

export default TableView;
