import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    isGraphOpen: false,
    isModalOpen: false,
    assessments: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleGraph: (state) => {
      state.isGraphOpen = !state.isGraphOpen;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    addNewAssessment: (state, action) => {
      state.assessments.push(action.payload);
    },
  },
});

export const { toggleMenu, toggleGraph, toggleModal, addNewAssessment } = appSlice.actions;
export default appSlice.reducer;
