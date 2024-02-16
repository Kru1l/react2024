import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {usersService} from "../services/usersService";
import UserDetails from "../components/UsersContainer/UserDetails/UserDetails";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null);

    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (state?.user) {
            setUserDetails(state.user);
        } else usersService.getById(id).then(({data}) => setUserDetails(data));
    }, [state, id]);


    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
    );
};

export default UserDetailsPage;