import React from "react";
import { IconButton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import TextBoxSmall from "../TextBox/TextBoxSmall/TextboxSmall";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const EpcRcmc = () => {
  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
            <TextBoxSmall placeholder={"EPC"} />
          </TableCell>
          <TableCell>
            <TextBoxSmall placeholder={"RCMC"} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default EpcRcmc;
