import { createAction, createReducer } from "@reduxjs/toolkit";
export const selectContacts = createAction("filters/selectContacts");
const selectContactsInitialState = {
  filters: {
    name: "",
  },
};

export const filterReducer = createReducer(
  selectContactsInitialState.filters,
  (builder) => {
    builder.addCase(selectContacts, (state, action) => {
      state.name = action.payload;
    });
  }
);
