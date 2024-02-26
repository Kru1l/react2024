import styles from './Car.module.css';
import {carService} from "../../../services";
import {useAppContext} from "../../../hooks";

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const {changeTrigger, setCarForUpdate} = useAppContext();

    const handleDelete = async (id) => {
        await carService.deleteById(id);
        changeTrigger();
    };

    return (
        <div className={styles.car}>
            <p>ID: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button className={styles.btn} onClick={() => setCarForUpdate(car)}>Update</button>
            <button className={styles.btn} onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
};

export {Car};