import {useNavigate} from "react-router-dom";

import styles from './Episode.module.css';
import {useAppContext} from "../../../hooks";

const Episode = ({episode}) => {
    const {id, name, characters, episode: chapter} = episode;
    const {setNameEpisode} = useAppContext();
    const navigate = useNavigate();

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]);
        setNameEpisode(name);
        navigate(`${id}/characters/${ids}`);
    }

    return (
        <div className={styles.Episode} onClick={() => toCharacters()}>
            <p><b>ID:</b> {id}</p>
            <p><b>Name:</b> {name}</p>
            <p><b>Chapter:</b> {chapter}</p>
        </div>
    );
};

export {Episode};