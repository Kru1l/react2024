import {useEffect, useState} from "react";
import {postService} from "../../../services/postService";
import PostComponent from "../PostComponent/PostComponent";
import styles from './PostsComponent.module.css';
import PostDetails from "../PostDetails/PostDetails";


const PostsComponent = () => {
    // з jsonplaceholdeer отримати всі пости в компоненту Posts.js
    // відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
    // Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getAll
            .then(({data}) => setPosts(data))
    }, [post]);

    return (
        <div className={styles.wrap}>
            <div>
                {posts.map(post => <PostComponent key={post.id} post={post} setPost={setPost}/>)}
            </div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export default PostsComponent;