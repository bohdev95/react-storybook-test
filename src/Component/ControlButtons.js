import { Box, Button } from "@mui/material";
import React from "react";

function ControlButtons({setChecked}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignitems: "center",
        justifyContent: "space-between",
        m: 1,
      }}
    >
      <Button variant="text">Close</Button>
      <Button
        variant="text"
        onClick={() => {
          setChecked([]);
        }}
      >
        Reset
      </Button>
    </Box>
  );
}

export default ControlButtons;
