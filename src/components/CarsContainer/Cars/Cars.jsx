import Car from "../Car/Car";

const Cars = ({cars,setCarForUpdate, setTrigger}) => {

    return (
        <>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}
        </>
    );
};

export default Cars;