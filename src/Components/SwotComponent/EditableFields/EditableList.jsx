import { useContext, useState } from "react";
import EditableItem from "./EditableItem";
import Context from "../../../Context/Context";
import "./Edit.css";
import IconButton from "../../Common/Button/IconButton";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const EditableList = ({ items, name, color }) => {
  const { swot, setSwot } = useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const handleItemChange = (itemToDelete, updateText) => {
    let updatedList;

    // Deleting list item
    if (updateText === "") {
      if (["strength", "weakness", "opportunity", "threat"].includes(name)) {
        const index = swot[name].findIndex(
          (arrItem) => arrItem === itemToDelete,
        );
        if (index !== -1) {
          updatedList = swot[name].filter((_, i) => i !== index);
        }
      }
    } else {
      // Updating existing list item
      const index = swot[name].findIndex((arrItem) => arrItem === itemToDelete);
      if (index !== -1) {
        swot[name][index] = updateText;
      }
    }

    // Update state using the callback function
    setSwot((prevSwot) => ({ ...prevSwot, [name]: updatedList }));
  };

  const addNewItem = (e) => {
    if (inputValue !== "") {
      if (e.key === "Enter" || e === "onClick") {
        let newSwot = { ...swot };
        if (["strength", "weakness", "opportunity", "threat"].includes(name)) {
          newSwot[name] = [...newSwot[name], inputValue];
        }
        setSwot(newSwot);
        setInputValue("");
      }
    }
  };

  return (
    <div className="editable_list_container">
      <div className="editable_list_header" style={{backgroundColor:{color}}}>
          <h5>{name}</h5>
      </div>
      <div className="editable_list">
        <ol>
          {items.map((item, index) => (
            <EditableItem
              key={`${item}-${index}`} // Ensure unique key based on `item.id` or a combination
              item={item}
              onItemChange={(updateText) => handleItemChange(item, updateText)}
            />
          ))}
        </ol>
      </div>
      <div className="addNew">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={addNewItem}
        />
        <IconButton>
          <ArrowForwardOutlinedIcon onClick={() => addNewItem("onClick")} />
        </IconButton>
      </div>
    </div>
  );
};

export default EditableList;
