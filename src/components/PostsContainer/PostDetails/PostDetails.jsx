import {useLoaderData} from "react-router-dom";

import styles from './PostDetails.module.css';

const PostDetails = () => {
    const {data} = useLoaderData();
    const {userId, id, title, body} = data;

    return (
        <div className={styles.postDet}>
            <p>UserId: {userId}</p>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostDetails;