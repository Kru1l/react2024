import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import Cars from "./Cars/Cars";
import CarForm from "./CarForm/CarForm";

// http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger, carForUpdate]);

    return (
        <>
            <CarForm setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate} setTrigger={setTrigger}/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </>
    );
};

export default CarsContainer;