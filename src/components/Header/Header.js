import {NavLink} from "react-router-dom";

import styles from './Header.module.css';

const Header = () => {

    return (
        <div className={styles.Header}>
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'register'}>Register</NavLink>
        </div>
    );
};

export {Header};