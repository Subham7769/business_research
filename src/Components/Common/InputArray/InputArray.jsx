import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import EditableList from "../EditableFields/EditableList";

//need only applicationUseCase object
const ApplicationUsage = ({items, name, color,mainData,setMainData}) => {
  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
          <EditableList
              items={items}
              name={name}
              color={color}
              mainData={mainData}
              setMainData={setMainData}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ApplicationUsage;
