import styles from './Button.module.css'
const Button = (props) =>{

    const setInputValidator = (event) =>{
        event.preventDefault();
        props.getConfirm();
    }

    return (
        
        <button onClick={props.onClick} className={styles.button} type={props.type || 'button'}>
            {props.text}
        </button>

    )

}

export default Button