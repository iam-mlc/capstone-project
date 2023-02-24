const List = ({data}) =>{

    const listItem = (list) => {

        return list.map(item =>{
            return(
                <li key={item.name}>
                    <a href={`${item.url()}`}>{item.name}</a>
                </li>
            )
        })
    }

    return(
        <>
            {

                listItem(data)

            }

        </>
    )
}

const Nav = () => {

    const nameToURL = (name) =>{
        const lowercase = name.toLowerCase();
        const url = lowercase.replace(/\s+/g, "-")

        return url
    }

    const links = [
        {
            name: "Home",
            url: function(){
                return nameToURL(this.name);
            }
        },
        {
            name: "About",
            url: function(){
                return nameToURL(this.name);
            }
        },
        {
            name: "Menu",
            url: function(){
                return nameToURL(this.name);
            }
        },
        {
            name: "Reservations",
            url: function(){
                return nameToURL(this.name);
            }
        },
        {
            name: "Order online",
            url: function(){
                return nameToURL(this.name);
            }
        },
        {
            name: "Login",
            url: function(){
                return nameToURL(this.name);
            }
        }
    ];

    return (
        <>
            <nav>
                <ul>
                    <List data={links}/>
                </ul>
            </nav>
        </>
     );
}

export default Nav;