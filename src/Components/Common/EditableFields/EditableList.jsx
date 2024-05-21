import { useState } from "react";
import EditableItem from "./EditableItem";
import "./Edit.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { IconButton } from "@mui/material";

                  //    Array,label, bgColor,StateObj,StateSetFunc
const EditableList = ({ items, name, color, mainData, setMainData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleItemChange = (itemToUpdate, updateText) => {
    let updatedList;
    const index = mainData[name].findIndex((arrItem) => arrItem === itemToUpdate);

    // Deleting list item
    if (updateText === "") {
      if (index !== -1) {
        updatedList = mainData[name].filter((_, i) => i !== index);
      }
    } else {
      // Updating existing list item
      if (index !== -1) {
        updatedList = mainData[name];
        updatedList[index] = updateText;
      }
    }
    
    // Update state using the callback function
    setMainData((prevmainData) => ({ ...prevmainData, [name]: updatedList }));
  };

  const addNewItem = (e) => {
    if (inputValue !== "") {
      if (e.key === "Enter" || e === "onClick") {
        let newmainData = { ...mainData };
        newmainData[name] = [...newmainData[name], inputValue];
        setMainData(newmainData);
        setInputValue("");
      }
    }
  };

  return (
    <div className="editable_list_container" style={{ borderColor: color }}>
      <div className="editable_list_header" style={{ backgroundColor: color }}>
        <h5>{name}</h5>
      </div>
      <div className="editable_list">
        <ol>
          {items.map((item, index) => (
            <EditableItem
              key={item + index} // Ensure unique key based on `item.id` or a combination
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
        <IconButton aria-label="delete"  onClick={() => addNewItem("onClick")}>
          <AddOutlinedIcon style={{ color: color }}/>
        </IconButton>
      </div>
    </div>
  );
};

export default EditableList;
