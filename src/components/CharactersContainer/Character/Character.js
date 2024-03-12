import styles from './Character.module.css';

const Character = ({character}) => {
    const {id, name, image} = character;

    return (
        <div className={styles.Character}>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};