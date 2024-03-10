import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {characterService} from "../../services";
import {Character} from "./Character";
import {charactersActions} from "../../store";

const Characters = () => {
    const [query] = useSearchParams({page: '1'});
    const {characters} = useSelector(state => state.characters);
    const dispatch = useDispatch();

    const page = query.get('page');

    useEffect(() => {
        characterService.getAll(page).then(({data}) => dispatch(charactersActions.setResponse(data)));
    }, [page, dispatch]);

    return (
        <div>
            {characters && characters.map(character =>
                <Character
                    key={character.id}
                    character={character}
                />)}
        </div>
    );
};

export {Characters};