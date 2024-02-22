import {useAppContext} from "../hooks";
// import {useEffect} from "react";

const Three = () => {

    const {users, setUsers} = useAppContext();
    console.log(users)

    // useEffect(() => {
    //     setUser({name: 'Jimmy', age: 26, street: 108});
    // }, [setUser]);

    // console.log(user)

    return (
        <div>
            {/*<h2>Three: {user.name} - {user.age}</h2>*/}
            {/*<h2>Three: {user.name} - {user.age} - {user.street}</h2>*/}
            {users.map(user => <p>{user.name}</p>)}
        </div>
    );
};

export default Three;