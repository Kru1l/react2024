import Users from "../components/UsersContainer/Users/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {

    return (
        <div>
            <Outlet/>
            <Users/>
        </div>
    );
};

export default UsersPage;