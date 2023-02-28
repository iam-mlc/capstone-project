import { ReactComponent as Facebook } from "../assets/Social-media-icons/facebook.svg";
import { ReactComponent as Whatsapp } from "../assets/Social-media-icons/whatsapp.svg";
import { ReactComponent as Instagram } from "../assets/Social-media-icons/instagram.svg";
import { ReactComponent as Twitter } from "../assets/Social-media-icons/twitter.svg";

const socialLinks = [
    {
        id: function(name){
            return name
        },
        name: "Facebook",
        icon: <Facebook/>,
        url: "https://www.facebook.com/"
    },
    {
        id: function(name){
            return name
        },
        name: "Instagram",
        icon: <Instagram/>,
        url: "https://www.instagram.com/"
    },
    {
        id: function(name){
            return name
        },
        name: "Whatsapp",
        icon: <Whatsapp/>,
        url: "https://web.whatsapp.com/"
    },
    {
        id: function(name){
            return name
        },
        name: "Twitter",
        icon: <Twitter/>,
        url: "https://twitter.com/"
    },
]

export default socialLinks;