import {useDispatch} from "react-redux";

import styles from './Car.module.css';
import {carActions} from "../../store";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div className={styles.Car}>
            <p>ID: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>

            <button className={styles.btn} onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button className={styles.btn} onClick={() => dispatch(carActions.deleteById({id}))}>Delete</button>
        </div>
    );
};

export {Car};