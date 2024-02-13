// http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин
import {useEffect, useState} from "react";
import {carService} from "../../services/carService";
import Cars from "./Cars/Cars";
import CarForm from "./CarForm/CarForm";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    return (
        <>
            <CarForm setTrigger={setTrigger}/>
            <Cars cars={cars}/>
        </>
    );
};

export default CarsContainer;