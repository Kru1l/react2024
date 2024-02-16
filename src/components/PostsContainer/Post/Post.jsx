import {useNavigate} from "react-router-dom";

import styles from './Post.module.css';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    return (
        <div className={styles.post}>
            <p>Title: {title}</p>
            <button className={styles.btn} onClick={() => navigate(`/posts/${id}`)}>Post Details</button>
        </div>
    );
};

export default Post;