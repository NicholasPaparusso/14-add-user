import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import React, { useState } from 'react';

const defaultUser = {
    name: '',
    age: '',
};


const AddUser = (props) => {
    
    const [enteredInput,setEnteredInput] = useState(defaultUser)
    // const [isInputValid, setIsInputValid] = useState();
    const [error,setError] = useState();
    const inputHandler = (value , inputName) => {
        switch (inputName){
            case'name':
                setEnteredInput({...enteredInput, name:value})
            break;

            case'age':
                setEnteredInput({...enteredInput, age:value})
            break;
        }
    }

    

    const formHandler = (event) => {
        event.preventDefault();

        // if(enteredInput.name.trim().length > 0 && +enteredInput.age.trim() > 0 && enteredInput.age.trim().length > 0){
        //     setIsInputValid(1);
        //     props.onAddUser(enteredInput);
        //     props.onInputValidation(isInputValid);
        //     setEnteredInput({name:'', age:''}) ;
        // }else{
        //     setIsInputValid(0);
        //     props.onInputValidation(isInputValid);
        // }

        if(enteredInput.name.trim().length === 0 && +enteredInput.age.trim() === 0){
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name ad age (non-empty values).'
            });
            // props.onInputValidation(error);
            return
        }
        if (+enteredInput.age < 1){
            setError({
                title: 'Invalid age',
                message: 'please enter a valid age',
            });
            // props.onInputValidation(error);
            return
        }

        props.onAddUser(enteredInput);
        setEnteredInput({name:'', age:''})

    }

    const errorHandler = () => {
        setError(null)
      }

    return(
        <div>
            {error && <ErrorModal title={error.title} content={error.message} onConfirmModal={errorHandler} />}
            <div className={styles.input}>
                <form onSubmit={formHandler}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input id='username' value={enteredInput.name} onChange={ (event) => inputHandler(event.target.value, 'name')} type='text'></input>
                    </div>
                    <div>
                        <label htmlFor='age'>Age (Years)</label>
                        <input id='age' value={enteredInput.age}  onChange={ (event) => inputHandler(event.target.value, 'age')} type='number' min={1} step={1}></input>
                    </div>
                    <div>
                        <Button  type={'submit'} text={'Add User'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser;