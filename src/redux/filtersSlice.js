import { initialState } from "./store";

export const selectContacts = (name) => {
  return {
    type: "filters/selectContacts",
    payload: name,
  };
};

export const filterReducer = (state = initialState.filters, action) => {
  console.log(action);
  switch (action.type) {
    case "filters/selectContacts":
      return {
        ...state,

        name: action.payload,
      };
    default:
      return state;
  }
};
