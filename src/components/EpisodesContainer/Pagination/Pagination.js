import {useSearchParams} from "react-router-dom";

import styles from './Pagination.module.css';
import {useSelector} from "react-redux";

const Pagination = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const {prevPage, nextPage} = useSelector(state => state.cartoon);
    const page = query.get('page');

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+page - 1).toString());
            return prev
        });
    };

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+page + 1).toString());
            return prev
        });
    };

    return (
        <div className={styles.Pagination}>
            <button disabled={!prevPage} onClick={prev}>Prev</button>
            <div id={styles.page}>{page}</div>
            <button disabled={!nextPage} onClick={next}>Next</button>
        </div>
    );
};

export {Pagination};