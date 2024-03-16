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
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";




//rendering all the varieties
function Row({ variety }) {
  const [currentVariety,setCurrentVariety] = useState(variety)
  const [open, setOpen] = useState(false);

  function updateSpecifications1(AllSpecification){
    const updatedCurrentVariety = currentVariety;
    const updatedAllSpecification = Object.assign({}, AllSpecification);
    // updatedCurrentVariety.specification = {...AllSpecification}
    setCurrentVariety(...currentVariety, ...updatedAllSpecification)
  }

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
          <TextBoxSmall value={currentVariety.name} />
        </TableCell>
        <TableCell align="center">
          <TextBoxSmall value={currentVariety.code} />  
        </TableCell>
        <TableCell align="center">
          <TextBoxSmall value={currentVariety.priceRange} />
        </TableCell>
        <TableCell align="center">
          <TextBoxSmall value={currentVariety.testing} />
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
                specification={currentVariety.specification}
                updateSpecifications2={(AllSpecification)=>{updateSpecifications1(AllSpecification)}}
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
    </>
  );
}

//only need variety array of object
 function VarietyData() {
  const currentProductId = useSelector(state => state.ProductSlice.currentProductId)
  const products = useSelector(state => state.ProductSlice.products)
  const product = products.find(products=>products.productId === currentProductId)
  const [varieties,SetVarieties] = useState(product.knowledgeBase.varieties);//or data from API or global product object

  //update varieties every time when currentProductId/product changes
  useEffect(() => {
    if (varieties) {
      SetVarieties(varieties);
    }
  }, [currentProductId, product]);

 
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

export default VarietyData;