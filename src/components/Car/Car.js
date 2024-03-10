import {useDispatch} from "react-redux";

import styles from './Car.module.css';
import {carActions} from "../../store";
import {carService} from "../../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    const handleDelete = async () => {
        await carService.deleteById(id);
        dispatch(carActions.changeTrigger());
    };

    return (
        <div className={styles.Car}>
            <p>ID: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>

            <button className={styles.btn} onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button className={styles.btn} onClick={handleDelete}>Delete</button>
        </div>
    );
};

export {Car};