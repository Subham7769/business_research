import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import {
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
import TabComponent from "../TabComponent/TabComponent";
import TextBoxSmall from "../TextBox/TextBoxSmall/TextboxSmall";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Accordian from "../Accordian/Accordian";
import ProductionHubTable from "../ProductionHubTable/ProductionHubTable";





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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Accordian
                nested={true}
                label="Properties"
                component={TabComponent}
                saveFunction={() => { alert("Properties") }}
              />
            </Box>
            <Box sx={{ margin: 1 }}>
              <Accordian
                nested={true}
                label="Production Hub (Locations)"
                component={ProductionHubTable}
                saveFunction={() => { alert("Production Hub (Locations)") }}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable() {
  const [varieties,SetVarieties] = React.useState([]);//or data from API or global product object
 
  function createVariety(name, code, priceRange, testing) {
    let variety = {
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
      productionHub: [{
        state: "",
        city: "",
        town: "",
        season: "",
      },],
    };
    SetVarieties((prevVarieties)=> [...prevVarieties, variety])
  }


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
              <IconButton aria-label="add" size="large" onClick={()=>{createVariety('Product Name','Product Code','Price Range', 'Product Testing')}}>
                <AddRoundedIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
