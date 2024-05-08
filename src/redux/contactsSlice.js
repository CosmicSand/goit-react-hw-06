import contactList from "../list.json";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");

export const deleteContact = createAction("contacts/deleteContact");

const contactsInitialState = {
  contacts: {
    items: contactList,
  },
};

export const contactReducer = createReducer(
  contactsInitialState.contacts,
  (bilder) => {
    bilder
      .addCase(addContact, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id.toString() !== action.payload
        );
      });
  }
);
