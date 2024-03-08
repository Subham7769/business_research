import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import VarietyAddTable from "../Tables/VarietyAddTable";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Product Variety
        </AccordionSummary>
        <AccordionDetails>
          <VarietyAddTable />
        </AccordionDetails>
        <AccordionActions>
          <Button variant="contained">Save</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
