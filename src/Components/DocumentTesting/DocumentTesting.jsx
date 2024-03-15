import { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import EditableList from "../SwotComponent/EditableFields/EditableList";

// required only evaluationCriteria: {}
const DocumentTesting = () => {
 const [evaluationCriteria,setEvaluationCriteria] = useState({
  Testing: ["as"],
  Standards: ["df"],
  Quality: ["gh"],
  Packing: ["kl"],
})

  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
            <EditableList
              items={evaluationCriteria.Testing}
              name={"Testing"}
              color={"lightgrey"}
              mainData={evaluationCriteria}
              setMainData={setEvaluationCriteria}
            />
          </TableCell>
          <TableCell>
            <EditableList
              items={evaluationCriteria.Standards}
              name={"Standards"}
              color={"lightgrey"}
              mainData={evaluationCriteria}
              setMainData={setEvaluationCriteria}
            />
          </TableCell>
          <TableCell>
            <EditableList
              items={evaluationCriteria.Quality}
              name={"Quality"}
              color={"lightgrey"}
              mainData={evaluationCriteria}
              setMainData={setEvaluationCriteria}
            />
          </TableCell>
          <TableCell>
            <EditableList
              items={evaluationCriteria.Packing}
              name={"Packing"}
              color={"lightgrey"}
              mainData={evaluationCriteria}
              setMainData={setEvaluationCriteria}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DocumentTesting;
