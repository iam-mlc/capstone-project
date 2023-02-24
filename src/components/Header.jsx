import Nav from "./Nav";

const Header = () => {
    return (
        <>
            <header className="mobile-grid medium-grid large-grid">
                <img src="../assets/Logo.svg" alt="logo"/>
                <Nav/>
            </header>
        </>
     );
}

export default Header;