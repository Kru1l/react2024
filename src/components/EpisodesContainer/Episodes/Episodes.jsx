import {useEffect, useState} from "react";

import styles from './Episodes.module.css';
import {rickAndMortyService} from "../../../services";
import {Episode} from "../Episode/Episode";
import {useAppContext, usePageQuery} from "../../../hooks";

const Episodes = () => {
    const [episodeRes, setEpisodeRes] = useState({prev: null, next: null, results: []});
    const {page, prevPage, nextPage} = usePageQuery();
    const {nameEpisode} = useAppContext();

    useEffect(() => {
        rickAndMortyService.episode.getAll(page).then(({data}) => {
            setEpisodeRes({prev: data.info.prev, next: data.info.next, results: data.results});
        })
            .catch((e) => console.error(e));
    }, [page, nameEpisode]);

    return (
        <div className={styles.WrapEpi}>
            {episodeRes.results.map(episode => <Episode
                key={episode.id}
                episode={episode}
            />)}

            <div className={styles.prevNextDiv}>
                <button disabled={!episodeRes.prev} onClick={prevPage}>prev</button>
                <button disabled={!episodeRes.next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};