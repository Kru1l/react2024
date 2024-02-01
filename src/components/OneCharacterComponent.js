import styles from './OneCharacterComponent.module.css';
const OneCharacterComponent = ({character}) => {
    const {id, name, status, species, gender, image} = character;

    return (
        <div className={styles.person}>
            <h2>{name}</h2>

            <div className={styles.text}>
                <p>ID: {id}</p>
                <p>STATUS: {status}</p>
                <p>SPECIES: {species}</p>
                <p>SEX: {gender}</p>
            </div>

            <img src={image} alt={name}/>
        </div>
    );
};

export default OneCharacterComponent;