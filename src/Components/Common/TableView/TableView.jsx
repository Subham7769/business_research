import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TableView.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "dodgerblue",
    color: theme.palette.common.white,
    padding: "5px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: "8px",
  },
}));
const StyledTableCellNested = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "dodgerblue",
    color: theme.palette.common.white,
    padding: "5px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: "3px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    padding: "5px",
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
    return str + "\n" + item.name;
  }, "");
  return ReasonStr;
}

function TableView({ products }) {
  return (
    <div className="tableDataContainer">
      {products.map((product) => (
        <TableContainer component={Paper} key={product.productId}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <tbody>
              {/* //Description */}
              <StyledTableRow>
                <StyledTableCell>
                  <table width="100%">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center">
                          Description
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow key={product.name}>
                        <StyledTableCell>
                          {product.knowledgeBase.description}
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </table>
                </StyledTableCell>
              </StyledTableRow>
              {/* //Name code priceRange */}
              <StyledTableRow>
                <StyledTableCell>
                  <table width="100%">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center" width="33%">
                          Product Name
                        </StyledTableCell>
                        <StyledTableCell align="center" width="33%">
                          HS Code
                        </StyledTableCell>
                        <StyledTableCell align="center" width="33%">
                          Selection
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell>{product.productName}</StyledTableCell>
                        <StyledTableCell>{product.hsCode}</StyledTableCell>
                        <StyledTableCell align="center">
                          {ReasonsExtractor(product.selectionReason)}
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </table>
                </StyledTableCell>
              </StyledTableRow>
              {/* //SWOT */}
              <StyledTableRow>
                <StyledTableCell>
                  <table width="100%">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center" width="50%">
                          Strength
                        </StyledTableCell>
                        <StyledTableCell align="center" width="50%">
                          Weakness
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow key={product.name}>
                        <StyledTableCell>
                          <TableBody>
                            <ol>
                              {product.swot.strength.map((item, index) => (
                                <li key={item + index}>{item}</li>
                              ))}
                            </ol>
                          </TableBody>
                        </StyledTableCell>
                        <StyledTableCell>
                          <TableBody>
                            <ol>
                              {product.swot.weakness.map((item, index) => (
                                <li key={item + index}>{item}</li>
                              ))}
                            </ol>
                          </TableBody>
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </table>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>
                  <table width="100%">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center" width="50%">
                          Opportunities
                        </StyledTableCell>
                        <StyledTableCell align="center" width="50%">
                          Threats
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow key={product.name}>
                        <StyledTableCell>
                          <TableBody>
                            <ol>
                              {product.swot.opportunity.map((item, index) => (
                                <li key={item + index}>{item}</li>
                              ))}
                            </ol>
                          </TableBody>
                        </StyledTableCell>
                        <StyledTableCell>
                          <TableBody>
                            <ol>
                              {product.swot.threat.map((item, index) => (
                                <li key={item + index}>{item}</li>
                              ))}
                            </ol>
                          </TableBody>
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </table>
                </StyledTableCell>
              </StyledTableRow>
              {/* //varieties  */}
              <StyledTableRow>
                <StyledTableCell>
                  <table width="100%">
                    {product.knowledgeBase.varieties.map((variety, index) => (
                      <>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell align="center" width="33%">
                              Variety Name
                            </StyledTableCell>
                            <StyledTableCell align="center" width="33%">
                              Variety Code
                            </StyledTableCell>
                            <StyledTableCell align="center" width="33%">
                              Price Range
                            </StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {/* //varieties name code priceRange */}
                          <StyledTableRow key={index}>
                            <StyledTableCell align="center">
                              {variety.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {variety.code}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {variety.priceRange}
                            </StyledTableCell>
                          </StyledTableRow>

                          {/* //specs */}
                          <StyledTableRow key={index + "spec"}>
                            <StyledTableCell colSpan={3}>
                              <table width="100%">
                                <TableHead>
                                  <TableRow>
                                    <StyledTableCell align="center" width="50%">
                                      Physical Properties
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width="50%">
                                      Chemical Properties
                                    </StyledTableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow>
                                    <StyledTableCell>
                                      <table width="100%">
                                        <TableHead>
                                          <TableRow>
                                            <StyledTableCell
                                              align="center"
                                              width={"50%"}
                                            >
                                              Name
                                            </StyledTableCell>
                                            <StyledTableCell
                                              align="center"
                                              width={"50%"}
                                            >
                                              Data
                                            </StyledTableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {variety.specification.Physical_Properties.map(
                                            (item, idx) => (
                                              <TableRow key={"physProp" + idx}>
                                                <StyledTableCell>
                                                  {item.name}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                  {item.data}
                                                </StyledTableCell>
                                              </TableRow>
                                            ),
                                          )}
                                        </TableBody>
                                      </table>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      <table width="100%">
                                        <TableHead>
                                          <TableRow>
                                            <StyledTableCell
                                              align="center"
                                              width={"50%"}
                                            >
                                              Name
                                            </StyledTableCell>
                                            <StyledTableCell
                                              align="center"
                                              width={"50%"}
                                            >
                                              Data
                                            </StyledTableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {variety.specification.Chemical_Properties.map(
                                            (item, idx) => (
                                              <TableRow key={"chemProp" + idx}>
                                                <StyledTableCell>
                                                  {item.name}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                  {item.data}
                                                </StyledTableCell>
                                              </TableRow>
                                            ),
                                          )}
                                        </TableBody>
                                      </table>
                                    </StyledTableCell>
                                  </TableRow>
                                </TableBody>
                              </table>
                            </StyledTableCell>
                          </StyledTableRow>

                          <StyledTableRow key={index + "spec"}>
                            <StyledTableCell colSpan={3}>
                              <table width="100%">
                                <TableHead>
                                  <TableRow>
                                    <StyledTableCell align="center" width="50%">
                                      Technical Properties
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width="50%">
                                      Other_Properties
                                    </StyledTableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow>
                                    <StyledTableCell>
                                      <table width="100%">
                                        <TableHead>
                                          <TableRow>
                                            <StyledTableCell
                                              align="center"
                                              width={"50%"}
                                            >
                                              Name
                                            </StyledTableCell>
                                            <StyledTableCell
                                              align="center"
                                              width={"50%"}
                                            >
                                              Data
                                            </StyledTableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {variety.specification.Technical_Properties.map(
                                            (item, idx) => (
                                              <TableRow key={"techProp" + idx}>
                                                <StyledTableCell>
                                                  {item.name}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                  {item.data}
                                                </StyledTableCell>
                                              </TableRow>
                                            ),
                                          )}
                                        </TableBody>
                                      </table>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      <table width="100%">
                                        <TableHead>
                                          <TableRow>
                                            <StyledTableCell
                                              align="center"
                                              width={"50%"}
                                            >
                                              Name
                                            </StyledTableCell>
                                            <StyledTableCell
                                              align="center"
                                              width={"50%"}
                                            >
                                              Data
                                            </StyledTableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {variety.specification.Other_Properties.map(
                                            (item, idx) => (
                                              <TableRow key={"othrProp" + idx}>
                                                <StyledTableCell>
                                                  {item.name}
                                                </StyledTableCell>
                                                <StyledTableCell>
                                                  {item.data}
                                                </StyledTableCell>
                                              </TableRow>
                                            ),
                                          )}
                                        </TableBody>
                                      </table>
                                    </StyledTableCell>
                                  </TableRow>
                                </TableBody>
                              </table>
                            </StyledTableCell>
                          </StyledTableRow>
                          <StyledTableRow key={index + "spec"}>
                            <StyledTableCell colSpan={3}>
                              <table width="100%">
                                <TableHead>
                                  <TableRow>
                                    <StyledTableCell
                                      align="center"
                                      width="100%"
                                    >
                                      Production Hub
                                    </StyledTableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow>
                                    <StyledTableCell>
                                      <table width="100%">
                                        <TableHead>
                                          <TableRow>
                                            <StyledTableCell
                                              align="center"
                                              width={"25%"}
                                            >
                                              State
                                            </StyledTableCell>
                                            <StyledTableCell
                                              align="center"
                                              width={"25%"}
                                            >
                                              City
                                            </StyledTableCell>
                                            <StyledTableCell
                                              align="center"
                                              width={"25%"}
                                            >
                                              Town / Village
                                            </StyledTableCell>
                                            <StyledTableCell
                                              align="center"
                                              width={"25%"}
                                            >
                                              Season
                                            </StyledTableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          <TableRow>
                                            <StyledTableCell>
                                              <ol>
                                                {variety.productionHub.map(
                                                  (hub, idx) => (
                                                    <li key={"state" + idx}>
                                                      {hub.state}
                                                    </li>
                                                  ),
                                                )}
                                              </ol>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                              <ol>
                                                {variety.productionHub.map(
                                                  (hub, idx) => (
                                                    <li key={"city" + idx}>
                                                      {hub.city}
                                                    </li>
                                                  ),
                                                )}
                                              </ol>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                              <ol>
                                                {variety.productionHub.map(
                                                  (hub, idx) => (
                                                    <li
                                                      key={"villageTown" + idx}
                                                    >
                                                      {hub.townVillage}
                                                    </li>
                                                  ),
                                                )}
                                              </ol>
                                            </StyledTableCell>
                                            <StyledTableCell>
                                              <ol>
                                                {variety.productionHub.map(
                                                  (hub, idx) => (
                                                    <li key={"season" + idx}>
                                                      {hub.season}
                                                    </li>
                                                  ),
                                                )}
                                              </ol>
                                            </StyledTableCell>
                                          </TableRow>
                                        </TableBody>
                                      </table>
                                    </StyledTableCell>
                                  </TableRow>
                                </TableBody>
                              </table>
                            </StyledTableCell>
                          </StyledTableRow>
                        </TableBody>
                      </>
                    ))}
                  </table>
                </StyledTableCell>
              </StyledTableRow>
            </tbody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
}

export default TableView;
