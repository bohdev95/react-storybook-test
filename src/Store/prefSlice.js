import { createSlice } from "@reduxjs/toolkit";
// import { getObjectValue, validateJsonObject } from '../utils/Utility'
export const prefSlice = createSlice({
  name: "prefrence",
  initialState: {
    savedData: [],
    items: [{
      label: "Sale Date",
      value: "1"
    },
    {
      label: "Distance",
      value: "2"
    },
    {
      label: "Beds",
      value: "3"
    },
    {
      label: "Baths",
      value: "4"
    },
    {
      label: "Sq.Ft",
      value: "5"
    },
    {
      label: "Lot Size",
      value: "6"
    },
    {
      label: "Year",
      value: "7"
    },
    {
      label: "Source",
      value: "8"
    }]
  },
  reducers: {
    saveList: (state, action) => {
      const { data, name } = action.payload;
      state.savedData = [...state.savedData, { data, name }]
    },
    saveItems: (state, action) => {
      state.savedData = action.payload
    },
    rotateItems: (state, action) => {
      state.items = action.payload
    },
    removeEntries: (state, action) => {
      const index = action.payload
      const currentIndex = index
      const newChecked = [...state.savedData];

      if (currentIndex === -1) {
        return
      } else {
        newChecked.splice(currentIndex, 1);
      }
      state.savedData = newChecked
    }
  },
  devTools: true,
});
export const { saveList, saveItems, rotateItems, removeEntries } =
  prefSlice.actions;
export const getSavedData = state => state.prefrence.savedData;
export const getItems = state => state.prefrence.items;

export default prefSlice.reducer;
