import styles from "./ErrorMessage.module.css"

const ErrorMessage = ({name, formik}) => {
    
    const errors = formik.errors[`${name}`] && formik.touched[`${name}`];
    return(
        <div>
            { errors ? <div className={`${styles.error}`}>{formik.errors[`${name}`]}</div> : null}
        </div>
    )
}
 
export default ErrorMessage;