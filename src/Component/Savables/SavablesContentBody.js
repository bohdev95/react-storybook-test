import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import CloseIcon from '@mui/icons-material/Close';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import IconButton from '@mui/material/IconButton';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, Typography } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {removeEntries ,saveItems} from '../../Store/prefSlice';


function SavablesContentBody({getData,dispatch}) {
      
  function handleOnDragEndItems(result) {
    if (!result.destination) return;

    const Items = Array.from(getData);
    const [reorderedItem] = Items.splice(result.source.index, 1);
    Items.splice(result.destination.index, 0, reorderedItem);

    dispatch(saveItems(Items));
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Saved</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DragDropContext onDragEnd={handleOnDragEndItems}>
          <Droppable droppableId="characters">
            {(provided) => (
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  maxHeight: "70px",
                  minHeight: "50px",
                  overflowY: getData?.length > 2 ? "scroll" : "hidden",
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {getData?.map((data, index) => {
                  const labelId = `list-item-${index}`;
                  return (
                    <Draggable key={index} draggableId={labelId} index={index}>
                      {(provided) => (
                        <ListItem
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          id={index}
                          key={index}
                          secondaryAction={
                            <IconButton
                              {...provided.dragHandleProps}
                              edge="end"
                              aria-label="comments"
                            >
                              <DragHandleIcon />
                            </IconButton>
                          }
                          disablePadding
                        >
                          <ListItemButton
                            onClick={() => {
                              dispatch(removeEntries(index));
                            }}
                            role={undefined}
                            dense
                          >
                            <ListItemIcon>
                              <CloseIcon />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={data?.name} />
                          </ListItemButton>
                        </ListItem>
                      )}
                    </Draggable>
                  );
                })}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </AccordionDetails>
    </Accordion>
  );
}

export default SavablesContentBody;
