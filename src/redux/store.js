import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import contacts from "../list.json";

export const initialState = {
  contacts: {
    items: contacts,
  },
  filters: {
    name: "",
  },
};

// export const deleteContact = (id) => {
//   return {
//     type: "contacts/deleteContact",
//     payload: id,
//   };
// };

// export const addContact = (contact) => {
//   return {
//     type: "contacts/addContact",
//     payload: contact,
//   };
// };

// export const selectContacts = (name) => {
//   return {
//     type: "filters/selectContacts",
//     payload: name,
//   };
// };

// const rootReducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "contacts/deleteContact":
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(
//             (contact) => contact.id.toString() !== action.payload
//           ),
//         },
//       };
//     case "contacts/addContact":
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     case "filters/selectContacts":
//       return {
//         ...state,
//         filters: {
//           name: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
