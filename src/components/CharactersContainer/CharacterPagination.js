import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const CharacterPagination = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    const {prevPage, nextPage} = useSelector(state => state.characters);

    const prev = () => {
        setQuery(prevState => {
            prevState.set('page', (+page - 1).toString());
            return prevState
        });
    };

    const next = () => {
        setQuery(prevState => {
            prevState.set('page', (+page + 1).toString());
            return prevState
        });
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button disabled={!prevPage} onClick={prev}>prev</button>

            <div style={{border: 'solid 2px black', margin: '5px'}}>{page}</div>

            <button disabled={!nextPage} onClick={next}>next</button>
        </div>
    );
};

export {CharacterPagination};