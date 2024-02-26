import {useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import './main.css';
import {authService} from "../../services";
import {registerValidator} from "../../validators";

const RegisterForm = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({
        mode: "onBlur",
        resolver: joiResolver(registerValidator)
    });

    const registration = async (user) => {
        try {
            await authService.register(user);
            navigate('/login');
        } catch (e) {
            setError(true);
        }
    };

    return (
        <div className={'regBlock'}>
            <form className={'authForm'} onSubmit={handleSubmit(registration)}>
                <h1>Регістрація користувача</h1>
                {error && <span>User with this username already exists</span>}

                <input type="text" placeholder={'Username'} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}

                <input type="text" placeholder={'Password'} {...register('password')}/>
                {errors.password && <span>{errors.password.message}</span>}

                <input type="text" placeholder={'Confirm password'} {...register('re_password')}/>
                {errors.re_password && <span>{errors.re_password.message}</span>}

                <button disabled={!isValid} id={'btnReg'}>Register</button>
            </form>
        </div>
    );
};

export {RegisterForm};