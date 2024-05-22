import * as React from 'react';
import {
  Box, Collapse, IconButton, Table, TableBody, TableCell,
  TableContainer, TableRow, Typography, Paper
} from '@mui/material';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material';
import MultilineTextFields from '../MultilineTextFields/MultilineTextFields';

function createData(name) {
  return {
    name,
    history: [{ date: '2020-01-05', customerId: '11091700', amount: 3 }],
  };
}

const placeholders = [
  "Documents Required For Selling", "Lab Reports Cost", "Certificates Cost",
  "Licenses Cost", "Product Procurement & Process Cost", "Transport Cost (Warehouse to Shipping yard)",
  "Packing Customization Availability Provided", "Banking Charges & Remittance Conversion Charges",
  "Packing Cost", "Maintenance Cost", "Time to Arrange Final Product", "Quantity",
  "Different CHA Charges", "Different Port Charges (Nearest to the Product Variety)",
  "Different Freight Forwarder Charges", "Custom Charges", "ECGC/Insurance Charges",
  "Other Miscellaneous charges", "Profit"
];

function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">Details</Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow, idx) => (
                    <TableRow key={idx}>
                      <TableCell colSpan={6}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                          {placeholders.map((placeholder, index) => (
                            <Box key={index} sx={{ flex: '1 1 30%', minWidth: 200 }}>
                              <MultilineTextFields
                                value=""
                                placeholder={placeholder}
                                valueUpdater={() => console.log("hi")}
                              />
                            </Box>
                          ))}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [createData('USA')];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
