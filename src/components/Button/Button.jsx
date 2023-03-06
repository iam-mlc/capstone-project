import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ text, role, url, isDisabled, id }) => {
  const path = url === undefined ? "/" : url;

  switch (role) {
    case "link": {
      return (
        <>
          <Link
            to={`${path}`}
            className={`${styles.button}`}
            id={id === undefined ? "" : id}
          >
            {text}
          </Link>
        </>
      );
    }
    case "button": {
      return (
        <>
          <button
            className={`${styles.button}`}
            id={id === undefined ? "" : id}
          >
            {text}
          </button>
        </>
      );
    }
    case "submit": {
      return (
        <>
          <input
            type="submit"
            value={text}
            className={`${styles.button}`}
            disabled={
              isDisabled === undefined || isDisabled === false ? false : true
            }
            id={id === undefined ? "" : id}
          />
        </>
      );
    }
    default: {
      return (
        <>
          <Link
            to={`${path}`}
            className={`${styles.button}`}
            id={id === undefined ? "" : id}
          >
            {text}
          </Link>
        </>
      );
    }
  }
};

export default Button;
