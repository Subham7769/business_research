import React from "react";
import { IconButton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import TextBoxSmall from "../TextBox/TextBoxSmall/TextboxSmall";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const ApplicationUsage = () => {
  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
            <TextBoxSmall placeholder={"Application of Usage..."} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={4} style={{ textAlign: "right" }}>
            <IconButton aria-label="add" size="large">
              <AddRoundedIcon fontSize="inherit" />
            </IconButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ApplicationUsage;
