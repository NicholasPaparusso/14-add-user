import styles from './ErrorModal.module.css';
import Button from './Button';

const ErrorModal = (props) => {
    return (
    <div>    
        <div className={styles.backdrop} onClick={props.onConfirmModal}></div>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.content}>
                      {props.content}
                    <div className={styles.actions}>
                        <Button onClick={props.onConfirmModal} text={'ok'} />
                    </div>  
                </div>
            </div>
    </div>    
    );
}

export default ErrorModal