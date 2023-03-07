import Nav from "../Nav/Nav";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Logo_secondary from "../../assets/Little-Lemon-logos/Asset_9@4x.png";
import { ReactComponent as HamburgerMenu } from "../../assets/icon_hamburger_menu.svg";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded((prevState) => {
      return prevState ? false : true;
    });
  };
  console.log(isExpanded);
  return (
    <>
      <header className={`${styles.header} mobile-grid medium-grid large-grid`}>
        <div className={styles.logo_and_menu}>
          <a href="/" className={`${styles.logo}`}>
            <Logo className={`${styles.main_logo}`} />
            <img
              src={Logo_secondary}
              alt=""
              className={`${styles.secondary_logo}`}
            />
          </a>
          <button
            className={`${styles.hamburger_menu}`}
            aria-controls="main-nav"
            aria-expanded={isExpanded}
            onClick={handleClick}
          >
            <HamburgerMenu />
          </button>
        </div>
        <Nav id={"main-nav"} isExpanded={isExpanded} />
      </header>
    </>
  );
};

export default Header;
