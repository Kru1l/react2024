// import MyComponent from "./components/MyComponent";
//
// const App = () => {
//
//     return (
//         <div>
//             <MyComponent>
//                 <h2>Hello!</h2>
//             </MyComponent>
//         </div>
//     );
// };
//
// export {App};

// import {createContext} from "react";

import MyComponent from "./components/MyComponent";

// const Context = createContext(null);
const App = () => {

    // const user = {name: 'Kenny', age: 25};

    return (
        <div>
            {/*<Context.Provider value={[user]}>*/}
                <MyComponent/>
            {/*</Context.Provider>*/}
        </div>
    );
};

export {
    App,
    // Context
};