import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./SwotReasonSelection.css";
const SwotReasonSelection = () => {
  
  const [selectionReason, setSelectionReason] = useState([
    { status: false, name: "Availability" },
    { status: false, name: "Interest" },
    { status: false, name: "Demand" },
    { status: false, name: "Knowledge" },
  ]);

  const changeReason = (index) => {
    const newSelectionReason = [...selectionReason];
    newSelectionReason[index] = {
      ...newSelectionReason[index],
      status: !newSelectionReason[index].status,
    };
    setSelectionReason(newSelectionReason);
  };
  return (
    <div className="SwotReason">
      <FormGroup className="SwotReason">
        {selectionReason.map((item, index) => {
          return (
            <div className="selection" key={item.name + index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={item.status}
                    onChange={() => changeReason(index)}
                  />
                }
                label={item.name}
              />
            </div>
          );
        })}
      </FormGroup>
    </div>
  );
};

export default SwotReasonSelection;
