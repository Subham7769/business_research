import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div style={{ width: '95%' }}>
      <Accordion style={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          style={{ width: '100%' }} // Override external styles
        >
          Test Accordian
        </AccordionSummary>
        <AccordionDetails
          style={{ width: '100%' }} // Override external styles
        >
          <div style={{ width: '100%' }}>
            Lorem ipsum dolor si.
          </div>
        </AccordionDetails>
        <AccordionActions>
        <Button variant="contained">Save</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
