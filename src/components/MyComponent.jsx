// const MyComponent = ({children}) => {
//
//     return (
//         <div>
//             <h1>MyComponent</h1>
//             <hr/>
//             {children}
//         </div>
//     );
// };
//
// export default MyComponent;

import One from "./One";
// import {useAppContext} from "../hooks";

const MyComponent = () => {
// const {user} = useAppContext();

    return (
        <div>
            <h2>MyComponent</h2>
            <One/>
        </div>
    );
};

export default MyComponent;