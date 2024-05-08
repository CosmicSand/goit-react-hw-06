import { createAction, createReducer } from "@reduxjs/toolkit";
import contactList from "../list.json";
export const selectContacts = createAction("filters/selectContacts");
const selectContactsInitialState = {
  contacts: {
    items: contactList,
  },
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

// export const filterReducer = (state = initialState.filters, action) => {
//   console.log(action);
//   switch (action.type) {
//     case selectContacts.type:
//       return {
//         ...state,

//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// PURE REDUX

// import { initialState } from "./store";

// export const selectContacts = (name) => {
//   return {
//     type: "filters/selectContacts",
//     payload: name,
//   };
// };

// export const filterReducer = (state = initialState.filters, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "filters/selectContacts":
//       return {
//         ...state,

//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// };
