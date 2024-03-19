import  { useState } from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import TextBox from "../TextBox/Textbox";
import AddRoundedIcon from "@mui/icons-material/AddRounded";


//only need production Hub array of object
const ProductionHubTable = () => {
  let productionHubREquired = [{
    state: "Enter State",
    city: "Enter City",
    townVillage: "Enter Town/Village",
    season: "Enter Season",
  },];

  const [ProductionHub, setAllProductionHub] = useState(productionHubREquired);

  function AddProductionHub() {
    setAllProductionHub((prevProperties) => [
      ...prevProperties,
      { state: "Enter State", city: "Enter City", townVillage: "Enter Town/Village", season: "Enter Season", },
    ]);
  }

  function handleChange(e, hub) {
    const index = ProductionHub.findIndex(obj => obj.state === hub.state);
    if (index !== -1) {
      const updatedProperties = [...ProductionHub]; // Creating a copy of the state array
      if (e.target.name === "state") {
        updatedProperties[index] = { ...updatedProperties[index], state: e.target.value }; // Updating the name of the specific object
      } else if (e.target.name === "city") {
        updatedProperties[index] = { ...updatedProperties[index], city: e.target.value };
      } else if (e.target.name === "townVillage") {
        updatedProperties[index] = { ...updatedProperties[index], townVillage: e.target.value };
      } else if (e.target.name === "season") {
        updatedProperties[index] = { ...updatedProperties[index], season: e.target.value };
      }
      setAllProductionHub(updatedProperties); // Updating the state with the new array
    } else {
      alert("No object found");
    }
  }



  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        {ProductionHub.map((hub, index) => {
          return (
            <TableRow key={hub + index}>
              <TableCell>
                <TextBox placeholder={"State"} name={"state"} value={hub.state} onClick={(e)=>{handleChange(e,hub)}}/>
              </TableCell>
              <TableCell>
                <TextBox placeholder={"City"} name={"city"} value={hub.city} onClick={(e)=>{handleChange(e,hub)}}/>
              </TableCell>
              <TableCell>
                <TextBox placeholder={"Town/Village"} name={"townVillage"} value={hub.townVillage} onClick={(e)=>{handleChange(e,hub)}}/>
              </TableCell>
              <TableCell>
                <TextBox placeholder={"Season"} name={"season"} value={hub.season} onClick={(e)=>{handleChange(e,hub)}}/>
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell colSpan={4} style={{ textAlign: "right" }}>
            <IconButton aria-label="add" size="large" onClick={() => AddProductionHub()}>
              <AddRoundedIcon fontSize="inherit" />
            </IconButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ProductionHubTable;
