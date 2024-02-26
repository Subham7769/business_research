import { useState } from "react";
import "./Edit.css";

const EditableItem = ({ item, onItemChange }) => {
  const [isEditing, setEditing] = useState(false);
  const [updateText, setUpdateText] = useState(item);

  //Toogling btw inputbox and list item / updating the swot in parent component
  const handleBlur = () => {
    setEditing(false);
    onItemChange(updateText);
  };

  return isEditing ? (
    <input
      type="text"
      value={updateText}
      onBlur={handleBlur}
      onChange={(event) => {
        setUpdateText(event.target.value);
      }}
      autoFocus
    />
  ) : (
    <li onDoubleClick={() => setEditing(true)}>{updateText}</li>
  );
};

export default EditableItem;
