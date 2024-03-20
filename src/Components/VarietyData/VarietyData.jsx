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
import TextBox from "../TextBox/Textbox";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Accordian from "../Accordian/Accordian";
import ProductionHubTable from "../ProductionHubTable/ProductionHubTable";
import { useEffect, useState } from "react";



//rendering all the varieties
function Row({ variety, varieties, SetVarieties }) {
  const [currentVariety, setCurrentVariety] = useState(variety)//till here i am getting fully updated currentVariety
  const [open, setOpen] = useState(false);


  function setCurrentVarietyName(updatedValue) {
    setCurrentVariety((prevVariety) => ({
      ...prevVariety,
      name: updatedValue,
    }));
  }

  function setCurrentVarietyCode(updatedValue) {
    setCurrentVariety((prevVariety) => ({
      ...prevVariety,
      code: updatedValue,
    }));
  }

  function setCurrentVarietyPriceRange(updatedValue) {
    setCurrentVariety((prevVariety) => ({
      ...prevVariety,
      priceRange: updatedValue,
    }));
  }

  function setCurrentVarietyTesting(updatedValue) {
    setCurrentVariety((prevVariety) => ({
      ...prevVariety,
      testing: updatedValue,
    }));
  }

  function setSpecification(updatedValue) {
    setCurrentVariety((prevVariety) => ({
      ...prevVariety,
      specification: updatedValue,
    }));
  }

  function setProductionHub(updatedValue) {
    setCurrentVariety((prevVariety) => ({
      ...prevVariety,
      productionHub: updatedValue,
    }));
  }

  useEffect(() => {
    const Index = varieties.indexOf((obj) => obj.name === currentVariety.name)
    const allVarieties = [...varieties]
    allVarieties[Index] = currentVariety;
    SetVarieties(allVarieties);
  }, [currentVariety])

  return (
    <>
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
          <TextBox value={currentVariety.name} valueUpdater={(updatedValue)=>setCurrentVarietyName(updatedValue)} placeholder={"Name"} />
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVariety.code} valueUpdater={(updatedValue)=>setCurrentVarietyCode(updatedValue)} placeholder={"Code"} />
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVariety.priceRange} valueUpdater={(updatedValue)=>setCurrentVarietyPriceRange(updatedValue)} placeholder={"Price Range"} />
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVariety.testing} valueUpdater={(updatedValue)=>setCurrentVarietyTesting(updatedValue)} placeholder={"Testings"} />
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
                specification={currentVariety.specification}
                setSpecification={(updatedValue)=>setSpecification(updatedValue)}
              />
            </Box>
            <Box sx={{ margin: 1 }}>
              <Accordian
                nested={true}
                label="Production Hub (Locations)"
                component={ProductionHubTable}
                productionHub={currentVariety.productionHub}
                setProductionHub={(updatedValue)=>setProductionHub(updatedValue)}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

//only need variety array of object  
//or data from API or global product object
//till here i am getting fully updated varieties
function VarietyData({ varieties, SetVarieties, createVariety }) {

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
          {varieties.map((variety, index) => (
            <Row key={variety.name + index} variety={variety} varieties={varieties} SetVarieties={SetVarieties} />
          ))}
          <TableRow>
            <TableCell colSpan={6} style={{ textAlign: "right" }}>
              <IconButton aria-label="add" size="large" onClick={() => { createVariety() }}>
                <AddRoundedIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VarietyData;