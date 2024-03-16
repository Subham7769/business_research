import { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import EditableList from "../SwotComponent/EditableFields/EditableList";


const ApplicationUsage = () => {
  const [credentialCollection,setCredentialCollection] = useState({
    Applications:["df"],
  })
  // console.log(credentialCollection);
  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
          <EditableList
              items={credentialCollection.Applications}
              name={"Applications"}
              color={"lightgrey"}
              mainData={credentialCollection}
              setMainData={setCredentialCollection}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ApplicationUsage;
