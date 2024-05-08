import { createAction, createReducer } from "@reduxjs/toolkit";
import contactList from "../list.json";
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
