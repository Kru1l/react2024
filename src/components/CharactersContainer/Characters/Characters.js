import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import styles from './Characters.module.css';
import {cartoonActions} from "../../../store";
import {Character} from "../Character/Character";

const Characters = () => {
    const {characters} = useSelector(state => state.cartoon);
    const {ids} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartoonActions.getCharactersByIds({ids}))
    }, [ids, dispatch]);

    return (
        <div className={styles.Characters}>
            {characters && characters.map(character =>
                <Character
                    key={character.id}
                    character={character}
                />)}
        </div>
    );
};

export {Characters};