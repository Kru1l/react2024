import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className={styles.Header}>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={''}>Main</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export default Header;