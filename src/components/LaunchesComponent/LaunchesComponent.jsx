import {useEffect, useState} from "react";
import {launchService} from "../../services/launchService";
import LaunchComponent from "../LaunchComponent/LaunchComponent";

const LaunchesComponent = () => {
    // є API от SpaceX
    // https://api.spacexdata.com/v3/launches/
    //     потрібно вивести всі запуски кораблів окрім 2020 року
    // репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll.then(({data}) => setLaunches(data))
    }, []);

    return (
        <>
            {launches.map(launch => launch.launch_year !== '2020' && <LaunchComponent key={launch.flight_number} launch={launch}/>)}

            {/*{launches.filter(launch => launch.launch_year !== '2020')*/}
            {/*    .map(launch => <LaunchComponent key={launch.flight_number} launch={launch}/>)}*/}
        </>
    );
};

export default LaunchesComponent;