import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextBoxSmall from "../TextBoxSmall/TextboxSmall";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function createData(name, Code, priceRange, testing) {
  return {
    name,
    Code,
    priceRange,
    testing,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

let varieties = [
  {
    name: "v1",
    code: "pv1",
    priceRange: "200-301",
    testing: "abc",
    specification: {
      Physical_Properties: [
        {
          name: "Physical_Properties",
        },
      ],
      Chemical_Properties: [
        {
          name: "Chemical_Properties",
        },
      ],
      Technical_Properties: [
        {
          name: "Technical_Properties",
        },
      ],
      Other_Properties: [
        {
          name: "Other_Properties",
        },
      ],
    },
    productionHub: {
      state: "UP",
      city: "kn",
      town: "sj",
      season: "jn",
    },
  },
];

function Row({ variety }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Properties
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Physical</TableCell>
                  <TableCell align="center">Chemical</TableCell>
                  <TableCell align="center">Technical</TableCell>
                  <TableCell align="center">Other Specification</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Table size="small">
                      <TableBody>
                        {variety.specification.Physical_Properties.map(
                          (Physical, PhysicalIndex) => (
                            <TableRow key={PhysicalIndex}>
                              <TableCell component="th" scope="row">
                                <TextBoxSmall
                                  value={Object.keys(Physical)[0]}
                                />
                              </TableCell>
                              <TableCell align="right">
                                <TextBoxSmall value={Physical.name} />
                              </TableCell>
                            </TableRow>
                          ),
                        )}
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell>
                    <Table size="small">
                      <TableBody>
                        {variety.specification.Chemical_Properties.map(
                          (Chemical, ChemicalIndex) => (
                            <TableRow key={ChemicalIndex}>
                              <TableCell component="th" scope="row">
                                <TextBoxSmall
                                  value={Object.keys(Chemical)[0]}
                                />
                              </TableCell>
                              <TableCell align="right">
                                <TextBoxSmall value={Chemical.name} />
                              </TableCell>
                            </TableRow>
                          ),
                        )}
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell align="right">
                    <Table size="small">
                      <TableBody>
                        {variety.specification.Technical_Properties.map(
                          (Technical, TechnicalIndex) => (
                            <TableRow key={TechnicalIndex}>
                              <TableCell component="th" scope="row">
                                <TextBoxSmall
                                  value={Object.keys(Technical)[0]}
                                />
                              </TableCell>
                              <TableCell align="right">
                                <TextBoxSmall value={Technical.name} />
                              </TableCell>
                            </TableRow>
                          ),
                        )}
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell align="right">
                    <Table size="small">
                      <TableBody>
                        {variety.specification.Other_Properties.map(
                          (Other, OtherIndex) => (
                            <TableRow key={OtherIndex}>
                              <TableCell component="th" scope="row">
                                <TextBoxSmall value={Object.keys(Other)[0]} />
                              </TableCell>
                              <TableCell align="right">
                                <TextBoxSmall value={Other.name} />
                              </TableCell>
                            </TableRow>
                          ),
                        )}
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" colSpan={4}>
                    <IconButton aria-label="add">
                      <AddRoundedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    Code: PropTypes.string.isRequired,
    testing: PropTypes.string.isRequired,
    priceRange: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

// const varieties = [createData("Frozen yoghurt", 159, 6.0, 24)];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Variety</TableCell>
            <TableCell align="center">Product Code</TableCell>
            <TableCell align="center">Price Range</TableCell>
            <TableCell align="center"> General Testing Mechanism</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {varieties.map((variety) => (
            <Row key={variety.name} variety={variety} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
