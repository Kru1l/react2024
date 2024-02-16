import {useNavigate} from "react-router-dom";

import styles from './User.module.css';

const User = ({user}) => {
    const {id, name} = user;

    const navigate = useNavigate();

    return (
        <div className={styles.user}>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <button className={styles.btn} onClick={() => navigate(`${id}`, {state: {user}})}>User Details</button>
        </div>
    );
};

export default User;