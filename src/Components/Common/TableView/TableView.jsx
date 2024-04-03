import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TableView.css";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#e0f7ff",
    color: theme.palette.common.black,
    padding: "2px",
    borderRadius: "5px 5px 0px 0px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: "4px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    padding: "3px",
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

function printDiv(productName, id) {
  var divContents = document.getElementById(id).innerHTML;
  var a = window.open("", "", "height=100%, width=100%");
  a.document.write("<html>");
  a.document.write(`<body > <h1>${productName} + " Report"</h1><br>`);
  a.document.write(divContents);
  a.document.write("</body></html>");
  a.document.close();
  a.print();
}

function TableView({ products }) {
  return (
    <div className="tableDataContainer">
      {products.map((product) => (
        <TableContainer
          component={Paper}
          key={product.productId}
          id={product.productId}
        >
          <h1>{product.productName}</h1>
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
                      <StyledTableRow>
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
                        <StyledTableCell align="center" width="50%">
                          HS Code
                        </StyledTableCell>
                        <StyledTableCell align="center" width="50%">
                          Selection
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell>{product.hsCode}</StyledTableCell>
                        <StyledTableCell>
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
                        <StyledTableCell align="center" width="25%">
                          Strength
                        </StyledTableCell>
                        <StyledTableCell align="center" width="25%">
                          Weakness
                        </StyledTableCell>
                        <StyledTableCell align="center" width="25%">
                          Opportunities
                        </StyledTableCell>
                        <StyledTableCell align="center" width="25%">
                          Threats
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
                  {product.knowledgeBase.varieties.map((variety, index) => (
                    <TableContainer component={Paper} key={variety + index}>
                      <h2>{" Variety Name - " + variety.name}</h2>
                      <table width="100%" key={variety + index}>
                        <TableHead>
                          <TableRow>
                            <StyledTableCell align="center" width="50%">
                              Variety Code
                            </StyledTableCell>
                            <StyledTableCell align="center" width="50%">
                              Price Range
                            </StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {/* //varieties name code priceRange */}

                          <StyledTableRow key={index}>
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
                                    <StyledTableCell align="center" width="25%">
                                      Physical Properties
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width="25%">
                                      Chemical Properties
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width="25%">
                                      Technical Properties
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width="25%">
                                      Other_Properties
                                    </StyledTableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow>
                                    <StyledTableCell>
                                      <table width="100%">
                                        <TableBody>
                                          {variety.specification.Physical_Properties.map(
                                            (item, idx) => (
                                              <TableRow key={"physProp" + idx}>
                                                <StyledTableCell width="50%">
                                                  {item.name}
                                                </StyledTableCell>
                                                <StyledTableCell width="50%">
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
                                        <TableBody>
                                          {variety.specification.Chemical_Properties.map(
                                            (item, idx) => (
                                              <TableRow key={"chemProp" + idx}>
                                                <StyledTableCell width="50%">
                                                  {item.name}
                                                </StyledTableCell>
                                                <StyledTableCell width="50%">
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
                                        <TableBody>
                                          {variety.specification.Technical_Properties.map(
                                            (item, idx) => (
                                              <TableRow key={"techProp" + idx}>
                                                <StyledTableCell width="50%">
                                                  {item.name}
                                                </StyledTableCell>
                                                <StyledTableCell width="50%">
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
                                        <TableBody>
                                          {variety.specification.Other_Properties.map(
                                            (item, idx) => (
                                              <TableRow key={"othrProp" + idx}>
                                                <StyledTableCell width="50%">
                                                  {item.name}
                                                </StyledTableCell>
                                                <StyledTableCell width="50%">
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
                      </table>
                    </TableContainer>
                  ))}
                </StyledTableCell>
              </StyledTableRow>
              {/*  */}
            </tbody>
            <tfoot>
              <StyledTableRow>
                <StyledTableCell width="100%">
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() =>
                      printDiv(product.productName, product.productId)
                    }
                  >
                    {"Download" + " " + product.productName + " " + "Report"}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            </tfoot>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
}

export default TableView;
