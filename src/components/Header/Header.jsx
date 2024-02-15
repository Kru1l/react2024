import {NavLink} from "react-router-dom";

import styles from './Header.module.css';

const Header = () => {

    return (
        <div className={styles.Header}>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={''}>Main</NavLink>
        </div>
    );
};

export default Header;