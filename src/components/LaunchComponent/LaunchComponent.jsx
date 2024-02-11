import styles from './LaunchComponent.module.css';
const LaunchComponent = ({launch}) => {
    const {flight_number, mission_name, launch_year, links} = launch;

    return (
        <div className={styles.launch}>
            <h1>Mission Name: {mission_name}</h1>
            <p>Flight Number: {flight_number}</p>
            <p>Launch Year: {launch_year}</p>
            <img src={links.mission_patch_small} alt=""/>
        </div>
    );
};

export default LaunchComponent;