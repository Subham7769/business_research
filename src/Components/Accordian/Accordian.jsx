import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage({
  label,
  component: Component,
  saveFunction,
  nested,
  ...otherProps
}) {
  return (
    <div style={nested?{width: "100%"}:{ width: "95%" }}>
      <Accordion style={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          style={{ width: "100%" }} // Override external styles
        >
          {label}
        </AccordionSummary>
        <AccordionDetails style={{ width: "100%" }}>
          <Component {...otherProps} />
        </AccordionDetails>
        {saveFunction && (
          <AccordionActions>
            <Button
              variant="contained"
              onClick={() => {
                saveFunction();
              }}
            >
              Save
            </Button>
          </AccordionActions>
        )}
      </Accordion>
    </div>
  );
}
