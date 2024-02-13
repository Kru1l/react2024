import styles from './Car.module.css';

const Car = ({car}) => {
    const {id, brand, price, year} = car;


    return (
        <div className={styles.car}>
            <p>ID: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <div className={styles.btnWrap}>
                <button className={styles.button}>Update</button>
                <button className={styles.button}>Delete</button>
            </div>
        </div>
    );
};

export default Car;