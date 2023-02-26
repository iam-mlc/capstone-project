import links from "../../utils/navigationLinks.js"
import UnorderedList from "../UnorderedList/UnorderedList";

const FooterNavLinks = ({name, url}) => {
    return(
        <>
            <a href={`${url(name)}`}>{name}</a>
        </>
    )
}

const Footer = () => {
    return (
        <>
            <footer className="mobile-grid medium-grid large-grid">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h2>Navigation</h2>
                    <UnorderedList data={links} Component={FooterNavLinks}/>
                </div>
                <div>
                    <h2>Contact</h2>
                    <address>
                        <p>Address</p>
                        <a href="tel:+">Phone number</a>
                        <a href="mailto:">Email</a>
                    </address>
                </div>
                <div>
                    <h2>Social media</h2>
                </div>
            </footer>
        </>
     );
}

export default Footer;