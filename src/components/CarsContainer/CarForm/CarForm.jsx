import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import styles from './CarForm.module.css';
import {carService} from "../../../services/carService";
import {carValidator} from "../../../validators/carValidator";

const CarForm = ({carForUpdate, setCarForUpdate, setTrigger}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        setValue
    } = useForm({mode: "onSubmit", resolver: joiResolver(carValidator)});

    const onSave = async (data) => {
        await carService.create(data);
        setTrigger(prev => !prev);
        reset();
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue]);

    const onUpdate = async (data) => {
        await carService.updateById(carForUpdate.id, data);
        setTrigger(prev => !prev);
        setCarForUpdate(null);
        reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(carForUpdate ? onUpdate : onSave)}>
            <input type="text" placeholder={'Brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'Price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'Year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button className={styles.button}>
                {carForUpdate ? 'Update' : 'Save'}
            </button>
        </form>
    );
};

export default CarForm;