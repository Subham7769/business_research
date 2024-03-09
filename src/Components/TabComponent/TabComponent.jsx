import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { IconButton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import TextBoxSmall from "../TextBox/TextBoxSmall/TextboxSmall";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box sx={{ p: 1, borderRadius: "4px", width: "100%" }}>
          <Table size="large" aria-label="purchases" width="100%">
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextBoxSmall placeholder={"Property name"} />
                </TableCell>
                <TableCell>
                  <TextBoxSmall placeholder={"Value"} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} style={{ textAlign: "right" }}>
                  <IconButton aria-label="add" size="large" >
                    <AddRoundedIcon fontSize="inherit"/>
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      )}
    </div>
  );
}

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        style={{width: '100%'}}
      >
        <Tab label="Physical" />
        <Tab label="Chemical" />
        <Tab label="Technical" />
        <Tab label="Other Specifications" />
      </Tabs>
      <TabPanel value={value} index={0} />
      <TabPanel value={value} index={1} />
      <TabPanel value={value} index={2} />
      <TabPanel value={value} index={3} />
    </Box>
  );
}
