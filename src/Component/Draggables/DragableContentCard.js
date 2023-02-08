import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import DragHandleIcon from "@mui/icons-material/DragHandle";

function DragableContentCard({
  item,
  items,
  checked,
  setChecked,
}) {
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      const selectedObject = item.filter((data) => data.value === value);
      newChecked.push(selectedObject[0]);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <Draggable key={items.index} draggableId={items.labelId} index={items.index}>
      {(provided) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          id={items.index}
          dense
          button
        >
          <Checkbox
            edge="start"
            checked={checked.some((data) => data.value === items.value)}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": items.label }}
            onClick={handleToggle(items.value)}
          />
          <ListItemText id={items.labelId} primary={items.label} />
          <IconButton {...provided.dragHandleProps}>
            <DragHandleIcon />
          </IconButton>
        </ListItem>
      )}
    </Draggable>
  );
}

export default DragableContentCard;
