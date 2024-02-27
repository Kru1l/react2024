import {router} from "./router";
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import './index.css';
import {ContextProvider} from "./hoc";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
);