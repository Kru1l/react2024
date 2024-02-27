import {useEffect, useState} from "react";

import styles from './Episodes.module.css';
import {Episode} from "../Episode/Episode";
import {rickAndMortyService} from "../../../services";
import {useAppContext, usePageQuery} from "../../../hooks";

const Episodes = () => {
    const [episodeRes, setEpisodeRes] = useState({prev: null, next: null, results: []});
    const {setNameEpisode} = useAppContext();
    const {page, prevPage, nextPage} = usePageQuery();

    useEffect(() => {
        rickAndMortyService.episode.getAll(page).then(({data}) => {
            setEpisodeRes({prev: data.info.prev, next: data.info.next, results: data.results});
            setNameEpisode(null);
        })
            .catch((e) => console.error(e));
    }, [page, setNameEpisode]);

    return (
        <div className={styles.WrapEpi}>
            {episodeRes.results.map(episode => <Episode
                key={episode.id}
                episode={episode}
            />)}

            {(episodeRes.prev || episodeRes.next)
                &&
                (<div className={styles.prevNextDiv}>
                    <button disabled={!episodeRes.prev} onClick={prevPage}>prev</button>
                    <button disabled={!episodeRes.next} onClick={nextPage}>next</button>
                </div>)
            }
        </div>
    );
};

export {Episodes};