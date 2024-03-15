import React, { useState } from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import TextBoxSmall from "../TextBox/TextBoxSmall/TextboxSmall";
import AddRoundedIcon from "@mui/icons-material/AddRounded";


//only need production Hub array of object
const ProductionHubTable = () => {
  let productionHubREquired = [{
    state: "",
    city: "",
    townVillage: "",
    season: "",
  },];

  const [ProductionHub, setAllProductionHub] = useState(productionHubREquired);
  console.log(ProductionHub)

  function AddProductionHub() {
    setAllProductionHub((prevProperties) => [
      ...prevProperties,
      { state: "Enter State", city: "Enter City", townVillage: "Enter Town/Village", season: "Enter Season", },
    ]);
  }
  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        {ProductionHub.map((hub, index) => {
          return (
            <TableRow key={hub + index}>
              <TableCell>
                <TextBoxSmall placeholder={"State"} />
              </TableCell>
              <TableCell>
                <TextBoxSmall placeholder={"City"} />
              </TableCell>
              <TableCell>
                <TextBoxSmall placeholder={"Town/Village"} />
              </TableCell>
              <TableCell>
                <TextBoxSmall placeholder={"Season"} />
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
