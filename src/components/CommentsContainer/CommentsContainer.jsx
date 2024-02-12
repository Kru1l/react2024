import {useEffect, useState} from "react";

import CommentForm from "./CommentForm/CommentForm";
import Comments from "./Comments/Comments";
import {commentService} from "../../services/commentService";

//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом
//     на https://jsonplaceholder.typicode.com/comments

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);
    const [postedComment, setPostedComment] = useState(null);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data));
    }, []);

    useEffect(() => {
        postedComment && setComments(prev => [...prev, postedComment])
    }, [postedComment]);

    return (
        <>
            <CommentForm setPostedComment={setPostedComment}/>
            <hr/>
            <Comments comments={comments}/>
        </>
    );
};

export default CommentsContainer;