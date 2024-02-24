import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import styles from './CarForm.module.css';
import {carService} from "../../../services";
import {useAppContext} from "../../../hooks";
import {carValidator} from "../../../validators";

const CarForm = () => {

    const {changeTrigger, carForUpdate, setCarForUpdate} = useAppContext();

    const {
        register,
        handleSubmit,
        setValue,
        formState: {isValid, errors},
        reset
    } = useForm({
        mode: 'onBlur',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const save = async (data) => {
        try {
            await carService.create(data);
            changeTrigger();
            reset();
        } catch (e) {
            console.error(e);
        }
    }

    const update = async (data) => {
        await carService.updateById(carForUpdate.id, data);
        setCarForUpdate(null);
        changeTrigger();
        reset();
    }

    return (
        <form className={styles.carForm} onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'Brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'Price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'Year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid} className={styles.button}>
                {carForUpdate ? 'Update' : 'Save'}
            </button>
        </form>
    );
};

export {CarForm};