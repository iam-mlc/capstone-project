import links from "../../utils/navigationLinks.js"
import UnorderedList from "../UnorderedList/UnorderedList";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import grids from "../../utils/cssGridClassNames.js";
import logo from "../../assets/Little-Lemon-logos/Asset 20@4x.png"
import styles from "./Footer.module.css"
import socialLinks from "../../utils/socialLinks.js"


const FooterNavLinks = ({name, url}) => {
    return(
        <>
            <a href={`${url(name)}`}>{name}</a>
        </>
    )
}

const FooterSocialLinks = ({icon, url}) => {
    return(
        <>
            <a href={url} className={`${styles.icon}`}>{icon}</a>
        </>
    )
}
const Footer = () => {

    return (
        <>
            <footer className={`${grids} ${styles.footer}`}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.navigation}>
                    <h2>Navigation</h2>
                    <UnorderedList data={links} Component={FooterNavLinks}/>
                </div>
                <div className={styles.address}>
                    <h2>Contact</h2>
                    <address>
                        <p>Address</p>
                        <a href="tel:+">Phone number</a>
                        <a href="mailto:">Email</a>
                    </address>
                </div>
                <div className={styles.social_links}>
                    <h2>Social media</h2>
                    <div className={`${styles.social_icons}`}>
                        <UnorderedList data={socialLinks} Component={FooterSocialLinks}/>
                    </div>
                </div>
            </footer>
        </>
     );
}

export default Footer;