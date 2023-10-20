import styles from './NewUser.module.css'
const NewUser = (props) => {

    return(
        <li className={styles.user}>
            {props.name} ({props.age} years old)
        </li>
    )
}

export default NewUser;