import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
        border: "1px solid rgba(0, 0, 0, 0.23)",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One Content
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three Content
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four Content
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five Content
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six Content
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven Content
      </TabPanel>
    </Box>
  );
}
