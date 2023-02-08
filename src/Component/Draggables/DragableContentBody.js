import {
  Box,
} from "@mui/material";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DragableContentCard from "./DragableContentCard";
import {
  getItems,
  rotateItems,
} from "../../Store/prefSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function DragableContentBody({
  checked,
  setChecked,
  search,
}) {
  const dispatch = useDispatch()
  const items = useSelector(getItems);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const Items = Array.from(items);
    const [reorderedItem] = Items.splice(result.source.index, 1);
    Items.splice(result.destination.index, 0, reorderedItem);
    dispatch(rotateItems(Items));
  }
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <Box
            sx={{ width: "100%", minHeight: "350px" }}
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items
              .filter((data) =>
                data.label.toLowerCase().includes(search.toLowerCase())
              )
              .map(({ value, label }, index) => {
                const labelId = `list-item-${index}`;
                return (
                  <DragableContentCard
                    items={{value,label,index,labelId}}
                    item={items}
                    checked={checked}
                    setChecked={setChecked}
                    dispatch={dispatch}
                    rotateItems={rotateItems}
                    search={search}
                  
                  />
                );
              })}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DragableContentBody;
