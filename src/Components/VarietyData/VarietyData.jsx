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
  const [currentVariety,setCurrentVariety] = useState(variety)//till here i am getting fully updated currentVariety
  const [currentVarietyName,setCurrentVarietyName] = useState(currentVariety.name)
  const [currentVarietyCode,setCurrentVarietyCode] = useState(currentVariety.code)
  const [currentVarietyPriceRange,setCurrentVarietyPriceRange] = useState(currentVariety.priceRange)
  const [currentVarietyTesting,setCurrentVarietyTesting] = useState(currentVariety.testing)
  const [specification,setSpecification] = useState(currentVariety.specification)
  const [productionHub,setProductionHub] = useState(currentVariety.productionHub)
  const [open, setOpen] = useState(false);


  useEffect(()=>{
    const Index = varieties.indexOf((obj)=> obj.name === currentVariety.name)
    const allVarieties = [...varieties]
    allVarieties[Index] = currentVariety;
    SetVarieties(allVarieties);
  },[currentVariety])

  useEffect(() => {
    setCurrentVariety((prevCurrentVariety) => ({
      ...prevCurrentVariety,
      specification: specification,
    }));
  }, [specification]);

  

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
          <TextBox value={currentVarietyName} valueUpdater={setCurrentVarietyName} placeholder={"Name"}/>
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVarietyCode} valueUpdater={setCurrentVarietyCode} placeholder={"Code"}/>
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVarietyPriceRange}valueUpdater={setCurrentVarietyPriceRange}  placeholder={"Price Range"}/>
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVarietyTesting} valueUpdater={setCurrentVarietyTesting} placeholder={"Testings"}/>
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
                specification={specification}
                setSpecification={setSpecification}
              />
            </Box>
            <Box sx={{ margin: 1 }}>
              <Accordian
                nested={true}
                label="Production Hub (Locations)"
                component={ProductionHubTable}
                productionHub={productionHub}
                setProductionHub={setProductionHub}
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
 function VarietyData({varieties, SetVarieties, createVariety}) {

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
          {varieties.map((variety,index) => (
            <Row key={variety.name+index} variety={variety} varieties={varieties} SetVarieties={SetVarieties}/>
          ))}
          <TableRow>
            <TableCell colSpan={6} style={{ textAlign: "right" }}>
              <IconButton aria-label="add" size="large" onClick={()=>{createVariety()}}>
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