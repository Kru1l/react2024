import {useEffect, useState} from "react";

import {Car} from "../Car/Car";
import styles from './Cars.module.css';
import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../../services";
import {useAppContext} from "../../../hooks";

const Cars = () => {
    const [cars, setCars] = useState([]);

    const {trigger} = useAppContext();

    useEffect(() => {
        try {
            carService.getAll().then(({data: {items}}) => setCars(items));
        } catch (e) {
            console.error(e);
        }
    }, [trigger]);

    return (
        <div className={styles.cars}>
            <CarForm/>

            {cars.map(car => <Car
                key={car.id}
                car={car}
            />)}
        </div>
    );
};

export {Cars};