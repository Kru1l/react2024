import styles from './Todo.module.css';

const Todo = ({todo}) => {
    const {userId, id, title} = todo;

    return (
        <div className={styles.todo}>
            <p>UserId: {userId}</p>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
        </div>
    );
};

export default Todo;