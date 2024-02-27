import {createContext, useState} from "react";

const Context = createContext(null);

const ContextProvider = ({children}) => {
    const [nameEpisode, setNameEpisode] = useState(null);

    return (
        <Context.Provider value={{nameEpisode, setNameEpisode}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};