import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import styles from './CarForm.module.css';
import {carActions} from "../../store";

const CarForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {isValid},
        reset
    } = useForm();

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            const {brand, price, year} = carForUpdate;
            setValue('brand', brand, {shouldValidate: true});
            setValue('price', price, {shouldValidate: true});
            setValue('year', year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        dispatch(carActions.create({car}));
        reset();
    };

    const update = async (newCar) => {
        dispatch(carActions.updateById({id: carForUpdate.id, newCar}));
        reset();
    };

    return (
        <form className={styles.CarForm} onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {required: true})}/>
            <input type="text" placeholder={'price'} {...register('price', {required: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {required: true})}/>

            <button disabled={!isValid} className={styles.submit}>
                {carForUpdate ? 'Update' : 'Save'}
            </button>
        </form>
    );
};

export {CarForm};