import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import styles from './Post.module.css';
import {postsService} from "../../services/postsService";

const Post = () => {
    const {postId} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data));
    }, [postId]);

    return (
        <div className={styles.post}>
            {post && <>
                <p>userId: {post.userId}</p>
                <p>ID: {post.id}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </>}
        </div>
    );
};
export default Post;