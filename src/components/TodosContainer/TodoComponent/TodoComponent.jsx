const TodoComponent = ({todo}) => {
    const {userId, id, title} = todo;

    return (
        <div>
            <p>UserId: {userId}</p>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <button>Info</button>
        </div>
    );
};

export default TodoComponent;