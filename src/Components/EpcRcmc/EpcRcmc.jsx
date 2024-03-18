import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import TextBoxSmall from "../TextBox/TextBoxSmall/TextboxSmall";

const EpcRcmc = ({EPC_RCMC_Updater, EPC, RCMC}) => {
 const [updatedEPC, setUpdatedEPC] = useState(EPC);
 const [updatedRCMC, setUpdatedRCMC] = useState(RCMC);

 function handleChange(e){
  if (e.target.name ==="EPC") {
    setUpdatedEPC(e.target.value);
  }
  if (e.target.name ==="RCMC") {
    setUpdatedRCMC(e.target.value);
  }
  EPC_RCMC_Updater(updatedEPC,updatedRCMC);
 }

  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
            <TextBoxSmall placeholder={"EPC"} name={"EPC"} onChange={(e)=>handleChange(e)}/>
          </TableCell>
          <TableCell>
            <TextBoxSmall placeholder={"RCMC"} name={"RCMC"} onChange={(e)=>handleChange(e)}/>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default EpcRcmc;
