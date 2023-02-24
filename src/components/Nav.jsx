
const links = [
    {
        name: "Home",
        url: nameToURL(this.name)
    },
    {
        name: "About",
        url: nameToURL(this.name)
    },
    {
        name: "Menu",
        url: nameToURL(this.name)
    },
    {
        name: "Reservations",
        url: nameToURL(this.name)
    },
    {
        name: "Order online",
        url: nameToURL(this.name)
    },
    {
        name: "Login",
        url: nameToURL(this.name)
    }
];
const nameToURL = (name) =>{
    const lowercase = name.toLowerCase();
    const url = lowercase.replace(/\s+/g, "-")

    return url
}

const Nav = () => {
    return (
        <>
            <nav>
                
            </nav>
        </>
     );
}

export default Nav;