import React from 'react'
import Paper from '@mui/material/Paper';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Searchable({search,setSearch}) {

  return (
    <Paper
    component="form"
    sx={{ p: '2px 0px', display: 'flex', alignItems: 'center', minWidth: "100%" }}
  >
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <InputBase
      onChange={(e) => { setSearch(e.target.value) }}
      value={search}
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search"
      inputProps={{ 'aria-label': 'Search' }}
    />
  </Paper>
  )
}

export default Searchable