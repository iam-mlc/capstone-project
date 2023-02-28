import links from "../../utils/navigationLinks";
import UnorderedList from "../UnorderedList/UnorderedList";
import styles from "./Nav.module.css"

const NavLinks = ({url, name}) =>{
    return(
        <>
            <a href={`${url(name)}`}>{name}</a>
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