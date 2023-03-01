import styles from "./Button.module.css"
import { Link } from "react-router-dom";

const Button = ({text, role, url}) => {

    const path = url === undefined ? "/" : url

    switch(role){
        case "link" : {
            return (
                <>
                    <Link to={`${path}`} className={`${styles.button}`}>{text}</Link>
                </>
            );
        }
        case "button" : {
            return (
                <>
                    <button className={`${styles.button}`}>{text}</button>
                </>
             );
        }
        default: {
            return (
                <>
                    <Link to={`${path}`} className={`${styles.button}`}>{text}</Link>
                </>
            );
        }
    }
}

export default Button;