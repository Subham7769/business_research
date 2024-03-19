import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import EditableList from "../SwotComponent/EditableFields/EditableList";

//need only applicationUseCase object
const ApplicationUsage = ({applicationUseCase,setApplicationUseCase}) => {
  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
          <EditableList
              items={applicationUseCase.Applications}
              name={"Applications"}
              color={"lightgrey"}
              mainData={applicationUseCase}
              setMainData={setApplicationUseCase}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ApplicationUsage;
