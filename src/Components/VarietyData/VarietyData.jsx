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
  const [specification,setSpecification] = useState(currentVariety.specification)//till here i am getting fully updated currentVariety
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
          <TextBox value={currentVariety.name} />
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVariety.code} />  
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVariety.priceRange} />
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVariety.testing} />
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
 function VarietyData({varieties, SetVarieties}) {

 
// create a new variety 
  function createVariety(name, code, priceRange, testing) {
    let newVariety = {
      name,
      code,
      priceRange,
      testing,
      specification: {
        Physical_Properties: [
          {
            name: "Physical_Properties",
            data: "data"
          },
        ],
        Chemical_Properties: [
          {
            name: "Chemical_Properties",
            data: "data"
          },
        ],
        Technical_Properties: [
          {
            name: "Technical_Properties",
            data: "data"
          },
        ],
        Other_Properties: [
          {
            name: "Other_Properties",
            data: "data"
          },
        ],
      },
      productionHub: [{
        state: "Enter State",
        city: "Enter City",
        townVillage: "Enter Town/Village",
        season: "Enter Season",
      },],
    };
    SetVarieties((prevVarieties)=> [...prevVarieties, newVariety])
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
            <Row key={variety.name} variety={variety} varieties={varieties} SetVarieties={SetVarieties}/>
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

export default VarietyData;