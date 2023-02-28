import styles from "./Button.module.css"

const Button = ({text, role, url}) => {

    const path = url === undefined ? "/" : url

    switch(role){
        case "link" : {
            return (
                <>
                    <a href={`${path}`} className={`${styles.button}`}>{text}</a>
                </>
            );
        }
        case "button" : {
            return (
                <>
                    <button className={`${styles.button}`}>{text}</button>
                </>
             );
        }
        default: {
            return (
                <>
                    <a href={`${path}`} className={`${styles.button}`}>{text}</a>
                </>
            );
        }
    }
}

export default Button;