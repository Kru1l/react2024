import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from './Cars.module.css';
import {carService} from "../../services";
import {carActions} from "../../store";
import {Car} from "../Car/Car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setResponse(data)))
    }, [trigger, dispatch]);

    return (
        <div className={styles.Cars}>
            {cars && cars.map(car =>
                <Car
                    key={car.id}
                    car={car}
                />)}
        </div>
    );
};

export {Cars};