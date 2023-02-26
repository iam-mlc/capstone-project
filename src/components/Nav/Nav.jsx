import links from "../../utils/navigationLinks";
import UnorderedList from "../UnorderedList/UnorderedList";

const NavLinks = ({url, name}) =>{
    return(
        <>
            <a href={`${url(name)}`}>{name}</a>
        </>
    )
}

const Nav = () => {

    return (
        <>
            <nav>
                <UnorderedList data ={links} Component = {NavLinks}/>
            </nav>
        </>
     );
}

export default Nav;