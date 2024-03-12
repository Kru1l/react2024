import {useNavigate} from "react-router-dom";

import styles from './Episode.module.css';

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]);
        navigate(`/characters/${ids}`);
    };

    return (
        <div className={styles.Episode} onClick={toCharacters}>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Chapter: {chapter}</p>
        </div>
    );
};

export {Episode};