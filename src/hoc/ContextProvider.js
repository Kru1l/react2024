import {createContext, useState} from "react";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [trigger, setTrigger] = useState(null);

    const changeTrigger = () => {
        setTrigger(prev => !prev);
    };

    return (
        <div>
            <Context.Provider value={{trigger, changeTrigger, carForUpdate, setCarForUpdate}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
};