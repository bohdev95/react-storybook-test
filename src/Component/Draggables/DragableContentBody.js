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
            sx={{ width: "100%", height: "300px", overflow:"auto",
           "&::-webkit-scrollbar": {
              width: 20
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#F9F9F9",
              border: "solid 1px #DFE1E6"
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#1976d2",
              borderRadius: 8,
              border: "6px solid transparent",
              "background-clip": "content-box"
            },
          }}
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
                    key={index}
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
