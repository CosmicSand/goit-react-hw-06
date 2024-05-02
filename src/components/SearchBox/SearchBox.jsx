import { useId } from "react";
import css from "./SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  const searchId = useId();

  return (
    <>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id={searchId}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
}
export default SearchBox;
