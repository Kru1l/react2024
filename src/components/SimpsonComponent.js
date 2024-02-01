import styles from './SimpsonComponent.module.css';

const SimpsonComponent = ({simp}) => {
    const {name, age, photo} = simp;

    return (
        <div className={styles.member}>
            <h2>{name} - {age}</h2>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default SimpsonComponent;