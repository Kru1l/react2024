import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import styles from './Header.module.css';
import {authService} from "../../services";

const Header = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const token = authService.getToken();

    useEffect(() => {
        if (token) {
            authService.me().then(({data}) => setUser(data))
                .catch(() => navigate('/login'));
        } else {
            setUser(null);
        }
    }, [token, navigate]);

    const logOut = () => {
        authService.deleteToken();
        navigate('/login');
    };

    return (
        <div className={styles.Header}>
            {!user ? <div className={styles.linksBlock}>
                    <NavLink to={'/login'}>Login</NavLink>
                    <NavLink to={'/register'}>Register</NavLink>
                </div>
                :
                <div className={styles.info}>
                    <div id={styles.me}>{user?.username}</div>
                    <button id={styles.logOut} onClick={() => logOut()}>Log Out</button>
                </div>
            }
        </div>
    );
};

export {Header};