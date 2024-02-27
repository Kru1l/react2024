import styles from './Header.module.css';
import {useAppContext} from "../../hooks";

const Header = () => {
    const {nameEpisode} = useAppContext();

    return (
        <div className={styles.Header}>
            {nameEpisode ?
                <h1 id={styles.title}>{nameEpisode}</h1>
                :
                <h1 id={styles.title}>Rick & Morty</h1>}
        </div>
    );
};

export {Header};