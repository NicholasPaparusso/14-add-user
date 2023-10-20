import styles from './UserList.module.css';
import NewUser from './NewUser';
// import React, { useState } from 'react';
const UserList = (props) => {
    if(props.data.length === 0){
        return(
            <div className={styles.users}>
                No user found
            </div>
        );
    }else{
        return(
            <div className={styles.users}>

                <ul>
                
                {
                    props.data.map( (user, index) => {
                     return  <NewUser key={user.name + index} name={user.name} age={user.age} />
                    } )
                }

                </ul>

            </div>
        )
    }
}

export default UserList;
