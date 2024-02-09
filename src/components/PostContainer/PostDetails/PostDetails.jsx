const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;

    return (
        <div>
            <p>User ID: {userId}</p>
            <p>Post ID: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostDetails;