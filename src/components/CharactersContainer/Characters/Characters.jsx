import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import styles from './Characters.module.css';
import {rickAndMortyService} from "../../../services";
import {Character} from "../Character/Character";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();
    const {ids} = useParams();

    useEffect(() => {
        rickAndMortyService.characters.getByIds(ids).then(({data}) => setCharacters(data))
            .catch((e) => console.error(e));
    }, [ids]);

    return (
        <div className={styles.Characters}>
            <button onClick={() => navigate(-1)}>Back</button>

            {characters.map(character => <Character
                key={character.id}
                character={character}
            />)}
        </div>
    );
};

export {Characters};