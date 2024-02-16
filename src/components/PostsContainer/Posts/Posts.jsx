import {useLoaderData} from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const {data} = useLoaderData();

    return (
        <div>
            {data.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export default Posts;