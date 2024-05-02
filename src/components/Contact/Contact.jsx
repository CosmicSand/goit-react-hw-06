import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

function Contact({ contactInfo: { id, name, number }, onDel }) {
  function handleClick(e) {
    const id = e.target.id;
    console.log(id);
    onDel(id);
  }

  return (
    <>
      <div>
        <IoPersonSharp className={css.dude} size="18" />

        <p className={css.text}>{name}</p>
        <br />

        <FaPhone className={css.phone} size="18" />

        <p className={css.text}>{number}</p>
      </div>
      <button className={css.btn} type="button" id={id} onClick={handleClick}>
        Delete
      </button>
    </>
  );
}

export default Contact;
