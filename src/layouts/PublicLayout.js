import {Navigate, Outlet} from "react-router-dom";

import {authService} from "../services";

const PublicLayout = () => {

    const token = authService.getToken('token');

    if (token) {
        return <Navigate to={'/cars'}/>
    }

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {PublicLayout};