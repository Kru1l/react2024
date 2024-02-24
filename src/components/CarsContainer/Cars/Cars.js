import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {Car} from "../Car/Car";
import styles from './Cars.module.css';
import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../../services";
import {useAppContext} from "../../../hooks";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    const {trigger} = useAppContext();

    const currentPage = query.get('page');

    useEffect(() => {
        try {
            carService.getAll(currentPage).then(({data}) => {
                setCars(data.items);
                setPrevNext({prev: data.prev, next: data.next});
            });
        } catch (e) {
            console.error(e);
        }
    }, [trigger, currentPage]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString());
            return prev
        })
    };

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString());
            return prev
        })
    };

    return (
        <div className={styles.cars}>
            <CarForm/>

            {(prevNext.prev || prevNext.next) && <div className={styles.prevNext}>
                <button disabled={!prevNext.prev} onClick={prev}>prev</button>
                <button disabled={!prevNext.next} onClick={next}>next</button>
            </div>}

            {cars.map(car => <Car
                key={car.id}
                car={car}
            />)}
        </div>
    );
};

export {Cars};