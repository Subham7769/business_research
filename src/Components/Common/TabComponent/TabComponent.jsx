import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, IconButton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import TextBox from "../MultilineTextFields/MultilineTextFields";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

//All properties with corresponding property key-value pair
// All properties -
// Physical_Properties, 
// Chemical_Properties, 
// Technical_Properties, 
// Other_Properties

function TabPanel({ value, index, properties, setUpdateProperty }) {
  const [allProperties, setAllProperties] = useState(properties)//till here all properties are updated

  function AddProperties() {
    setAllProperties(prevProperties => [
      ...prevProperties,
      { name: 'New Property', data: 'New data' }
    ]);
  }

  //handling changes to properties array & its property data
  function handleChangeName(updatedValue, property) {
    const index = allProperties.findIndex(obj => obj.name === property.name);
    if (index !== -1) {
      const updatedProperties = [...allProperties]; // Creating a copy of the state array
      updatedProperties[index] = { ...updatedProperties[index], name: updatedValue }; // Updating the name of the specific object
      setAllProperties(updatedProperties); // Updating the state with the new array
    } else {
      alert("No object found");
    }
  }

  function handleChangeData(updatedValue, property) {
    const index = allProperties.findIndex(obj => obj.name === property.name);
    if (index !== -1) {
      const updatedProperties = [...allProperties]; // Creating a copy of the state array
      updatedProperties[index] = { ...updatedProperties[index], data: updatedValue };
      setAllProperties(updatedProperties); // Updating the state with the new array
    } else {
      alert("No object found");
    }
  }
  //handling property array update
  function handleSave() {
    setUpdateProperty(allProperties)
  }


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
              {allProperties.map((property, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextBox placeholder={"Property name"} value={property.name} name={"name"} valueUpdater={(updatedValue) => handleChangeName(updatedValue, property)} />
                  </TableCell>
                  <TableCell>
                    <TextBox placeholder={"Value"} value={property.data} name={"data"} valueUpdater={(updatedValue) => handleChangeData(updatedValue, property)} />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} style={{ textAlign: "right" }}>
                  <IconButton aria-label="add" size="large" onClick={() => AddProperties()}>
                    <AddRoundedIcon fontSize="inherit" />
                  </IconButton>
                  <Button variant="contained" onClick={() => {handleSave();}}>Save</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      )}
    </div>
  );
}

//only need specifications object
function TabComponent({ specification, setSpecification }) {
  // console.log(specification)
  const [Physical_Properties, setPhysical_Properties] = useState(specification.Physical_Properties)
  const [Chemical_Properties, setChemical_Properties] = useState(specification.Chemical_Properties)
  const [Technical_Properties, setTechnical_Properties] = useState(specification.Technical_Properties)
  const [Other_Properties, setOther_Properties] = useState(specification.Other_Properties)
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Create a new specification object with updated properties
    const updatedSpecification = {
      Physical_Properties: [...Physical_Properties],
      Chemical_Properties: [...Chemical_Properties],
      Technical_Properties: [...Technical_Properties],
      Other_Properties: [...Other_Properties],
    };

    // Set the state to use the new specification object
    setSpecification(updatedSpecification);
  }, [Physical_Properties, Chemical_Properties, Technical_Properties, Other_Properties]);


// upadting the corresponding array of properties
  function handlePropertiesUpdates(updatedProperties, name) {
    if (name == "Physical_Properties") {
      setPhysical_Properties(updatedProperties)
    } else if (name == "Chemical_Properties") {
      setChemical_Properties(updatedProperties)
    } else if (name == "Technical_Properties") {
      setTechnical_Properties(updatedProperties)
    } else if (name == "Other_Properties") {
      setOther_Properties(updatedProperties)
    }

  }

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
        style={{ width: '100%' }}
      >
        <Tab label="Physical" />
        <Tab label="Chemical" />
        <Tab label="Technical" />
        <Tab label="Other Specifications" />
      </Tabs>
      <TabPanel value={value} index={0} properties={Physical_Properties} setUpdateProperty={(updatedProperties) => { handlePropertiesUpdates(updatedProperties, "Physical_Properties") }} />
      <TabPanel value={value} index={1} properties={Chemical_Properties} setUpdateProperty={(updatedProperties) => { handlePropertiesUpdates(updatedProperties, "Chemical_Properties") }} />
      <TabPanel value={value} index={2} properties={Technical_Properties} setUpdateProperty={(updatedProperties) => { handlePropertiesUpdates(updatedProperties, "Technical_Properties") }} />
      <TabPanel value={value} index={3} properties={Other_Properties} setUpdateProperty={(updatedProperties) => { handlePropertiesUpdates(updatedProperties, "Other_Properties") }} />
    </Box>
  );
}

export default TabComponent;