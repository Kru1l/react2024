import styles from './Car.module.css';
import {carService} from "../../../services/carService";

const Car = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car;

    const handleDelete = async () => {
        await carService.deleteById(id);
        setTrigger(prev => !prev);
    }

    return (
        <div className={styles.car}>
            <p>ID: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <div className={styles.btnWrap}>
                <button className={styles.button} onClick={() => setCarForUpdate(car)}>Update</button>
                <button className={styles.button} onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Car;