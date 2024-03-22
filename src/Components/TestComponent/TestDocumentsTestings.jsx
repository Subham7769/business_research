import React from "react";
import { IconButton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import TextBox from "../Common/TextBox/Textbox";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const TestDocumentTesting = () => {
  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
            <TextBox placeholder={"Testing"} />
          </TableCell>
          <TableCell>
            <TextBox placeholder={"Standards"} />
          </TableCell>
          <TableCell>
            <TextBox placeholder={"Quality"} />
          </TableCell>
          <TableCell>
            <TextBox placeholder={"Packing"} />
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

export default TestDocumentTesting;
