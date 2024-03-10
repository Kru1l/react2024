const Character = ({character}) => {
    const {id, name, image} = character;

    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};