import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from './components/AddUser/UserList';

function App() {

  const [users, setUsers] = useState([]);
  const [inputValidation, setInputValidation] = useState();
  
  const getUser = (user) => {
    setUsers( (prevUser) => {
      return [user, ...prevUser];
    } );
  }

  const getInputValidation = (error) => {
    setInputValidation(error)
  }


  return (
    <div className="App">
      <AddUser  onAddUser={getUser}/>
      <UserList data={users}/>
    </div>
  );
}

export default App;
