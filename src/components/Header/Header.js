import styles from './Header.module.css';
import {useAppContext} from "../../hooks";

const Header = () => {
    const {nameEpisode, setNameEpisode} = useAppContext();

    return (
        <div className={styles.Header}>
            <h1 id={styles.title}>Rick & Morty</h1>
            {nameEpisode && <div>{nameEpisode}</div>}
        </div>
    );
};

export {Header};