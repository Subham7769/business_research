import { useState } from "react";
import { IconButton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditableList from "../SwotComponent/EditableFields/EditableList";

const CertificatesLicense = () => {
  const [credentialCollection,setCredentialCollection] = useState({
    Certificates: ['cxc'],
    Licenses: ["xcx"],
    Documents: ["fgf"],
  })
  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
            <EditableList
              items={credentialCollection.Certificates}
              name={"Certificates"}
              color={"lightgrey"}
              mainData={credentialCollection}
              setMainData={setCredentialCollection}
            />
          </TableCell>
          <TableCell>
            <EditableList
              items={credentialCollection.Licenses}
              name={"Licenses"}
              color={"lightgrey"}
              mainData={credentialCollection}
              setMainData={setCredentialCollection}
            />
          </TableCell>
          <TableCell>
            <EditableList
              items={credentialCollection.Documents}
              name={"Documents"}
              color={"lightgrey"}
              mainData={credentialCollection}
              setMainData={setCredentialCollection}
            />
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

export default CertificatesLicense;
