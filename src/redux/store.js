import { createStore } from "redux";
import contacts from "../list.json";

export const initialState = {
  contacts: {
    items: contacts,
  },
  filters: {
    name: "",
  },
};

export const deleteContact = (id) => {
  return {
    type: "contacts/deleteContact",
    payload: id,
  };
};

export const addContact = (contact) => {
  return {
    type: "contacts/addContact",
    payload: contact,
  };
};

export const filterContacts = (name) => {
  return {
    type: "filters/filterContacts",
    payload: name,
  };
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "contacts/deleteContact":
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (contact) => contact.id.toString() !== action.payload
          ),
        },
      };
    case "contacts/addContact":
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    case "filters/filterContacts":
      return {
        ...state,
        filters: {
          name: action.payload,
        },
      };
    default:
      return state;
  }
};
export const store = createStore(rootReducer);
