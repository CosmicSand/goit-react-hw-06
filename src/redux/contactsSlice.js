import { initialState } from "./store.js";
import contactList from "../list.json";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");

export const deleteContact = createAction("contacts/deleteContact");

const contactsInitialState = {
  contacts: {
    items: contactList,
  },
  filters: {
    name: "",
  },
};

export const contactReducer = createReducer(
  contactsInitialState.contacts,
  (bilder) => {
    bilder
      .addCase(addContact, (state, action) => {
        state.items.push(action.payload);
        console.log(state);
      })
      .addCase(deleteContact, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id.toString() !== action.payload
        );
      });
    //   bilder.addCase(deleteContact, (state, action) => {
    //     state.items = state.items.filter(
    //       (contact) => contact.id.toString() !== action.payload
    //     );
    //   });
  }
);

// export const contactReducer = (state = initialState.contacts, action) => {
//   console.log(action);
//   switch (action.type) {
//     case deleteContact.type:
//       return {
//         ...state,

//         items: state.items.filter(
//           (contact) => contact.id.toString() !== action.payload
//         ),
//       };
//     case addContact.type:
//       return {
//         ...state,

//         items: [...state.items, action.payload],
//       };

//     default:
//       return state;
//   }
// };

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
