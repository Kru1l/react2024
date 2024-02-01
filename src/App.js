import CharactersComponent from "./components/CharactersComponent";

// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів
const App = () => {
    return (
        <div>
            <CharactersComponent/>
        </div>
    );
};

export default App;