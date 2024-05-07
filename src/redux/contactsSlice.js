import { initialState } from "./store";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");

export const deleteContact = createAction("contacts/deleteContact");

export const contactReducer = (state = initialState.contacts, action) => {
  console.log(action);
  switch (action.type) {
    case deleteContact.type:
      return {
        ...state,

        items: state.items.filter(
          (contact) => contact.id.toString() !== action.payload
        ),
      };
    case addContact.type:
      return {
        ...state,

        items: [...state.items, action.payload],
      };

    default:
      return state;
  }
};

// Pure Redux

// import { initialState } from "./store";

// export const addContact = (contact) => {
//   return {
//     type: "contacts/addContact",
//     payload: contact,
//   };
// };

// export const deleteContact = (id) => {
//   return {
//     type: "contacts/deleteContact",
//     payload: id,
//   };
// };

// export const contactReducer = (state = initialState.contacts, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "contacts/deleteContact":
//       return {
//         ...state,

//         items: state.items.filter(
//           (contact) => contact.id.toString() !== action.payload
//         ),
//       };
//     case "contacts/addContact":
//       return {
//         ...state,

//         items: [...state.items, action.payload],
//       };

//     default:
//       return state;
//   }
// };
