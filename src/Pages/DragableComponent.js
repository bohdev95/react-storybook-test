import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getItems,
  getSavedData,
  rotateItems,
  saveList,
} from "../Store/prefSlice";


import FormDialog from "../Component/FormDialog/FormDialog";
import Searchable from "../Component/Searchable/Searchable";
import DragableContentBody from "../Component/Draggables/DragableContentBody";
import SavablesContentBody from "../Component/Savables/SavablesContentBody";
import ControlButtons from "../Component/ControlButtons";

function DragableComponent() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const getData = useSelector(getSavedData);
  const items = useSelector(getItems);
  const [search, setSearch] = useState("");

  const handleClose = async (data) => {
    try {
      dispatch(saveList({ data: checked, name: data }));
      setChecked([]);
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <Grid container justifyContent={"center"}>
      <Grid sx={{ height: "500px", mt: 10 }} item xs={12} lg={3} md={4}>
        <Paper>
          <Searchable search={search} setSearch={setSearch} />
          <DragableContentBody
            setChecked={setChecked}
            search={search}
            dispatch={dispatch}
          />
          <SavablesContentBody
            getData={getData}
            dispatch={dispatch}
            saveList={saveList}
            checked={checked}
          />
          <FormDialog callback={handleClose} />
          <ControlButtons setChecked={setChecked} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default DragableComponent;
