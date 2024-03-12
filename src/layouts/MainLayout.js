import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import {Header} from "../components";

const MainLayout = () => {
    const {loading, error} = useSelector(state => state.cartoon);

    return (
        <div>
            <Header/>
            <Outlet/>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
        </div>
    );
};

export {MainLayout};