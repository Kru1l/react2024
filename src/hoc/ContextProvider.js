import {createContext, useState} from "react";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [users, setUsers] = useState([
        {id: 1, name: 'John', age: 25},
        {id: 2, name: 'Jimmy', age: 42},
        {id: 3, name: 'Julia', age: 34},
        {id: 4, name: 'Kenny', age: 85},
        {id: 5, name: 'Nora', age: 13},
        {id: 6, name: 'Lidia', age: 19},
    ]);


    return (
        <div>
            <Context.Provider value={{users, setUsers}}>
                {/*<h2>Three: {user.name} - {user.age} - {user.street}</h2>*/}
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
};