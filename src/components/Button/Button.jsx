import css from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ onClick }) {
  return (
    <button type="button" className={css.Button} onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};