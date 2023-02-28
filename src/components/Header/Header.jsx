import Nav from "../Nav/Nav";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <>
            <header className={`${styles.header} mobile-grid medium-grid large-grid`}>
                <a href="/" className={`${styles.logo}`}>
                    <Logo/>
                </a>
                <Nav/>
            </header>
        </>
     );
}

export default Header;