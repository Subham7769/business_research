import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TabComponent from "../../Common/TabComponent/TabComponent";
import TextBox from "../../Common/TextBox/Textbox";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Accordian from "../../Common/Accordian/Accordian";
import ProductionHubTable from "../Dashboard/ProductionHubTable/ProductionHubTable";

function createData(name, code, priceRange, testing) {
  return {
    name,
    code,
    priceRange,
    testing,
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
      state: "",
      city: "",
      town: "",
      season: "",
    },
  };
}

let varieties = [createData("v1", "pv1", "200-301", "abc")];

function Row({ variety }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <TextBox value={variety.name} />
        </TableCell>
        <TableCell align="center">
          <TextBox value={variety.code} />
        </TableCell>
        <TableCell align="center">
          <TextBox value={variety.priceRange} />
        </TableCell>
        <TableCell align="center">
          <TextBox value={variety.testing} />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Accordian 
              nested={true}
              label="Properties"
              component={TabComponent}
              saveFunction={() =>{alert("Properties")}}
              />
            </Box>
            <Box sx={{ margin: 1 }}>
            <Accordian 
              nested={true}
              label="Production Hub (Locations)"
              component={ProductionHubTable}
              saveFunction={() =>{alert("Production Hub (Locations)")}}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

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
            <TableCell align="center">General Testing</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {varieties.map((variety) => (
            <Row key={variety.name} variety={variety} />
          ))}
          <TableRow>
            <TableCell colSpan={6} style={{ textAlign: "right" }}>
              <Button variant="contained">
                <AddRoundedIcon />
                Add Variety
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
