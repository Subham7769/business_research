import * as React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="center">
          <TextBoxSmall value={variety.name} />
        </TableCell>
        <TableCell align="center">
          <TextBoxSmall value={variety.code} />
        </TableCell>
        <TableCell align="center">
          <TextBoxSmall value={variety.priceRange} />
        </TableCell>
        <TableCell align="center">
          <TextBoxSmall value={variety.testing} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6}>
          <IconButton aria-label="add">
            <AddRoundedIcon />
          </IconButton>
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
            <TableCell align="center">Variety</TableCell>
            <TableCell align="center">Product Code</TableCell>
            <TableCell align="center">Price Range</TableCell>
            <TableCell align="center">General Testing</TableCell>
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
