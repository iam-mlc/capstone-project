import links from "../../utils/navigationLinks";
import UnorderedList from "../UnorderedList/UnorderedList";
import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom";

const NavLinks = ({url, name}) =>{
    return(
        <>
            <NavLink to={`${url}`}>{name}</NavLink>
        </>
    )
}

const Nav = () => {
    const style = {
        parent: `${styles.menu}`,
        child: `${styles.item}`
    }

    return (
        <>
            <nav className={`${styles.nav}`}>
                <UnorderedList
                data ={links}
                Component = {NavLinks}
                styleElement={style}/>
            </nav>
        </>
     );
}

export default Nav;