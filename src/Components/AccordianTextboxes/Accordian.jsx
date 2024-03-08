import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Textbox from "../TextBox/Textbox";
import Table from "@mui/material/Table";

import {
  Paper,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Product Description
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Textbox />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
        <AccordionActions>
          <Button variant="contained">Save</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
