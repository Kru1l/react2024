import {useForm} from "react-hook-form";
import Joi from "joi";

import {authService} from "../../services";
import {registerValidator} from "../../validators";

const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm({
        mode: "onSubmit",
        resolver: Joi.resolver(registerValidator)
    });

    const registration = async (data) => {
        await authService.register(data);
    }

    return (
        <form name={'form'} onSubmit={handleSubmit(registration)}>
            <label>Username: <input type="text" {...register('username')}/></label>
            <label>Password: <input type="text" {...register('password')}/></label>
            <label>Confirm password: <input type="text" {...register('re_password')}/></label>
            <button>Login</button>
        </form>
    );
};

export {RegisterForm};