import {useForm} from "react-hook-form";

import {commentService} from "../../../services/commentService";

const CommentForm = ({setPostedComment}) => {

    const {register, handleSubmit, reset} = useForm();

    const save = async (data) => {
        const postedComment = await commentService.create(data);
        setPostedComment(postedComment.data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'userId'} {...register('userId')}/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>
    );
};

export default CommentForm;