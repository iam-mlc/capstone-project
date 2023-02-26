const nameToURL = (name) =>{
    const lowercase = name.toLowerCase();
    const url = lowercase.replace(/\s+/g, "-")

    return url
}

const links = [
    {
        name: "Home",
        url: function(name){
            return nameToURL(name);
        }
    },
    {
        name: "About",
        url: function(name){
            return nameToURL(name);
        }
    },
    {
        name: "Menu",
        url: function(name){
            return nameToURL(name);
        }
    },
    {
        name: "Reservations",
        url: function(name){
            return nameToURL(name);
        }
    },
    {
        name: "Order online",
        url: function(name){
            return nameToURL(name);
        }
    },
    {
        name: "Login",
        url: function(name){
            return nameToURL(name);
        }
    }
];

export default links;