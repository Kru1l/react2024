import {useEffect, useState} from "react";

import UserForm from "./UserForm/UserForm";
import Users from "./Users/Users";
import {userService} from "../../services/userService";

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом
// на https://jsonplaceholder.typicode.com/users

const UsersContainer = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    useEffect(() => {
        newUser && setUsers(prev => [...prev, newUser])
    }, [newUser]);

    return (
        <div>
            <UserForm setNewUser={setNewUser}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UsersContainer;