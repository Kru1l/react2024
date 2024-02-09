import styles from './PostComponent.module.css';

const PostComponent = ({post, setPost}) => {
    const {id, title} = post;

    return (
        <div className={styles.post}>
            <p>Post ID: {id}</p>
            <p>Title: {title}</p>

            <button onClick={() => setPost(post)}>Show details
            </button>
        </div>
    );
};

export default PostComponent;