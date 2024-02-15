import styles from './Album.module.css';

const Album = ({album}) => {
const {userId, id, title} = album;

    return (
        <div className={styles.album}>
            <p>UserId: {userId}</p>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
        </div>
    );
};

export default Album;