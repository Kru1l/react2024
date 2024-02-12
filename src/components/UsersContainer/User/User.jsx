import styles from './User.module.css';

const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div className={styles.user}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {username}</p>
        </div>
    );
};

export default User;