import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ onDel }) {
  const contacts = useSelector((state) => state.contacts.items);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contactInfo={contact} onDel={onDel} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
