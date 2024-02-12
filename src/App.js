import './App.css';
import UsersContainer from "./components/UsersContainer/UsersContainer";
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";

const App = () => {
    return (
        <div className={'App'}>
            {/*<UsersContainer/>*/}
            <CommentsContainer/>
        </div>
    );
};

export default App;