import OneCharacterComponent from "./OneCharacterComponent";

const characters = [
    {
        id: 6, name: 'Abadango Cluster Princess', status: 'Alive', species: 'Alien', gender: 'Female',
        image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'
    },
    {
        id: 500, name: 'Fascist Mr. President', status: 'Alive', species: 'Human', gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/500.jpeg'
    },
    {
        id: 323, name: 'Slaveowner', status: 'Dead', species: 'Human', gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/323.jpeg'
    },
    {
        id: 777, name: 'Gotron Pilot', status: 'Dead', species: 'Human', gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/777.jpeg'
    },
    {
        id: 568, name: 'Slut Dragon', status: 'Alive', species: 'Mythological Creature', gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/568.jpeg'
    }
];
const CharactersComponent = () => {
    return (
        <div>
            {characters.map(character => <OneCharacterComponent key={character.id} character={character}/>)}
        </div>
    );
};

export default CharactersComponent;