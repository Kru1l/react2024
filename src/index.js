import {RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client';

import './index.css';
import {router} from "./routing/router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);