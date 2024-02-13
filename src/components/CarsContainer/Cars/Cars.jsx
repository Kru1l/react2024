import Car from "../Car/Car";

const Cars = ({cars}) => {

    return (
        <>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </>
    );
};

export default Cars;