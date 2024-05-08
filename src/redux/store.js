import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import contactList from "../list.json";

export const initialState = {
  contacts: {
    items: contactList,
  },
  filters: {
    name: "",
  },
};

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
  },
});
