import styles from './UserDetails.module.css';
import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, name, username, email, phone, website} = userDetails;
    const navigate = useNavigate();

    return (
            <div className={styles.details}>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <button className={styles.btn} onClick={() => navigate(`/users/${id}/posts`)}>Posts Of Current User</button>
            </div>
    );
};

export default UserDetails;