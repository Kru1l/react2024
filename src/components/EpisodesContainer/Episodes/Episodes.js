import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import styles from './Episodes.module.css';
import {cartoonActions} from "../../../store";
import {Episode} from "../Episode/Episode";

const Episodes = () => {
    const dispatch = useDispatch();
    const [query] = useSearchParams({page: '1'});
    const {episodes} = useSelector(state => state.cartoon);

    const page = query.get('page');

    useEffect(() => {
        dispatch(cartoonActions.getAllEpisodes({page}));
    }, [dispatch, page]);

    return (
        <div className={styles.Episodes}>
            {episodes && episodes.map(episode =>
                <Episode
                    key={episode.id}
                    episode={episode}
                />
            )}
        </div>
    );
};

export {Episodes};