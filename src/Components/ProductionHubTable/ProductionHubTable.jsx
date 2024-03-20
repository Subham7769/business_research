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
const productionHubTable = ({productionHub, setProductionHub}) => {

  function AddproductionHub() {
    setProductionHub((prevProperties) => [
      ...prevProperties,
      { state: "Enter State", city: "Enter City", townVillage: "Enter Town/Village", season: "Enter Season", },
    ]);
  }

  function handleChange(updatedValue, hub,name) {
    const index = productionHub.findIndex(obj => obj.state === hub.state);
    if (index !== -1) {
      const updatedProperties = [...productionHub]; // Creating a copy of the state array
      if (name === "state") {
        updatedProperties[index] = { ...updatedProperties[index], state: updatedValue }; // Updating the name of the specific object
      } else if (name === "city") {
        updatedProperties[index] = { ...updatedProperties[index], city: updatedValue };
      } else if (name === "townVillage") {
        updatedProperties[index] = { ...updatedProperties[index], townVillage: updatedValue };
      } else if (name === "season") {
        updatedProperties[index] = { ...updatedProperties[index], season: updatedValue };
      }
      setProductionHub(updatedProperties); // Updating the state with the new array
    } else {
      alert("No object found");
    }
  }

  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        {productionHub.map((hub, index) => {
          return (
            <TableRow key={hub + index}>
              <TableCell>
                <TextBox placeholder={"State"} value={hub.state} valueUpdater={(updatedValue)=>{handleChange(updatedValue,hub,"state")}}/>
              </TableCell>
              <TableCell>
                <TextBox placeholder={"City"} value={hub.city} valueUpdater={(updatedValue)=>{handleChange(updatedValue,hub,"city")}}/>
              </TableCell>
              <TableCell>
                <TextBox placeholder={"Town/Village"} value={hub.townVillage} valueUpdater={(updatedValue)=>{handleChange(updatedValue,hub,"townVillage")}}/>
              </TableCell>
              <TableCell>
                <TextBox placeholder={"Season"} value={hub.season} valueUpdater={(updatedValue)=>{handleChange(updatedValue,hub,"season")}}/>
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell colSpan={4} style={{ textAlign: "right" }}>
            <IconButton aria-label="add" size="large" onClick={() => AddproductionHub()}>
              <AddRoundedIcon fontSize="inherit" />
            </IconButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default productionHubTable;
