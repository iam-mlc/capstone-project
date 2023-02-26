import Nav from "../Nav/Nav";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
const Header = () => {
    return (
        <>
            <header className="mobile-grid medium-grid large-grid">
                <a href="/">
                    <Logo/>
                </a>
                <Nav/>
            </header>
        </>
     );
}

export default Header;