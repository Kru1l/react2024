import {Outlet} from "react-router-dom";

import PostDetails from "../components/PostsContainer/PostDetails/PostDetails";

const PostDetailsPage = () => {

    return (
        <div>
            <PostDetails/>
            <h2>Comments</h2>
            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;