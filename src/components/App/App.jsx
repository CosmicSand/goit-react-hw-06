import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../list.json";
import css from "./App.module.css";

function App() {
  const LOCAL_STORAGE_KEY = "contactList";
  const [contacts, setContacts] = useState(() => getContacts());
  const [filter, setFilter] = useState("");

  function addContact(newContact) {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  }

  function deleteContact(id) {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id.toString() !== id)
    );
  }

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contacts));
  }, [contacts]);

  function getContacts() {
    if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
      return initialContacts;
    } else {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    }
  }

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDel={deleteContact} />
    </div>
  );
}

export default App;
