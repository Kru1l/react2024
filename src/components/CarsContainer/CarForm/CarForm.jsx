import {useForm} from "react-hook-form";
import styles from './CarForm.module.css';
import {carService} from "../../../services/carService";

const CarForm = ({setTrigger}) => {

    const {register, handleSubmit, reset} = useForm();

    const save = (data) => {
        carService.create(data);
        setTrigger(prev => !prev);
        reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'Brand'} {...register('brand')}/>
            <input type="text" placeholder={'Price'} {...register('price')}/>
            <input type="text" placeholder={'Year'} {...register('year')}/>
            <button className={styles.button}>Save</button>
        </form>
    );
};

export default CarForm;