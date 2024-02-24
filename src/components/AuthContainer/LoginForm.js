import {useForm} from "react-hook-form";

import './main.css';
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const LoginForm = () => {
    const [error, setError] = useState(null);

    const {
        register,
        handleSubmit,
        formState: {isValid}
    } = useForm({
        mode: "onSubmit"
    });

    const navigate = useNavigate();

    const login = async (user) => {
        try {
            await authService.login(user);
            navigate('/cars');
        } catch (e) {
            setError(true);
        }
    }

    return (
        <div className={'logBlock'}>
            <form className={'authForm'} onSubmit={handleSubmit(login)}>
                <h1>Вхід в особистий кабінет</h1>
                {error && <span>Username or password incorrect</span>}
                <input type="text" placeholder={'Username'} {...register('username', {required: true})}/>
                <input type="text" placeholder={'Password'} {...register('password', {required: true})}/>

                <button disabled={!isValid} id={'btnLog'}>Log In</button>
            </form>
        </div>
    );
};

export {LoginForm};