import styles from './Comment.module.css';
const Comment = ({comment}) => {
const {postId, id, name, email, body} = comment;

    return (
        <div className={styles.comment}>
            <p>PostId: {postId}</p>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Comment;