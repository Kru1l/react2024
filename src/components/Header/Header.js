import styles from './Header.module.css';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className={styles.Header}>
            <Link to={'/episodes'}>Rick & Morty</Link>
        </div>
    );
};

export {Header};