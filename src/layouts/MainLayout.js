import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const MainLayout = () => {
    const {loading, error} = useSelector(state => state.cars);

    return (
        <div>
            <Outlet/>
            {loading && <h1 style={{textAlign: 'center'}}>Loading...</h1>}
            {error && <h1 style={{textAlign: 'center'}}>{error}</h1>}
        </div>
    );
};

export {MainLayout};