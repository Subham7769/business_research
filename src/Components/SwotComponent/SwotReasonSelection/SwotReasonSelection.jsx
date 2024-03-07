import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { changeReason } from "../../../Redux/Slices/SelectionReasonSlice";

const SwotReasonSelection = () => {
  const dispatch = useDispatch();
  const { selectionReason } = useSelector((state) => state.SwotReasonSlice);

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
                    onChange={() =>
                      dispatch(
                        changeReason({
                          index: index,
                        }),
                      )
                    }
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
