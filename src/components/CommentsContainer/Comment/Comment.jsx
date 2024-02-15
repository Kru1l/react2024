import {useNavigate} from "react-router-dom";

import styles from './Comment.module.css';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div className={styles.comment}>
            <p>PostId: {postId}</p>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
            <button className={styles.btn} onClick={() => navigate(`/posts/${postId}`)}>Current Post</button>
        </div>
    );
};

export default Comment;