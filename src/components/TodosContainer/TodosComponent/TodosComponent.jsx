import {useEffect, useState} from "react";
import {todosService} from "../../../services/todosService";
import TodoComponent from "../TodoComponent/TodoComponent";

const TodosComponent = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data));
    }, []);

    return (
        <div>
            {todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default TodosComponent;