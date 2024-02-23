import { useContext, useRef, useState } from "react";
import EditableItem from "./EditableItem";
import Context from "../../../Context/Context";
import "./Edit.css";
import IconButton from "../../Common/Button/IconButton";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const EditableList = ({ items, name }) => {
  const { swot, setSwot } = useContext(Context);
  const [listItems, setListItems] = useState(items);
  const inputValue = useRef(0);

  const handleItemChange = (index, newText) => {
    const updateItems = [...listItems];
    updateItems[index] = newText;
    setListItems(updateItems);
  };

  function PushOperation() {
    const strength = swot.strength;
    console.log(strength);
    switch (name) {
      case "strength":
        strength = [...strength, inputValue.current];
        setSwot(strength);
        break;
      case "weakness":
        break;
      case "opportunity":
        break;
      case "threat":
        break;

      default:
        console.log("error");
        break;
    }
  }

  const addNewItem = (e) => {
    if (e) {
      if (e.keyCode === 13) {
        PushOperation();
      }
    }
    PushOperation();
  };

  return (
    <div className="editable_list">
      <ol>
        {listItems.map((item, index) => (
          <EditableItem
            key={index}
            item={item}
            onItemChange={(e) => handleItemChange(index, e.target.value)}
          />
        ))}
      </ol>
      <div className="addNew">
        <input
          type="text"
          ref={inputValue}
          onChange={(e) => {
            addNewItem(e);
          }}
        />
        <IconButton>
          <ArrowForwardOutlinedIcon
            onClick={() => {
              addNewItem;
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default EditableList;
