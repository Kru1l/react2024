import {useForm} from "react-hook-form";

import {userService} from "../../../services/userService";

const UserForm = ({setNewUser}) => {

    const {register, handleSubmit, reset} = useForm({
        mode: "all"
    });

    const create = async (user) =>  {
      const postedUser = await userService.create(user);
        setNewUser(postedUser.data)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <button>Create</button>
        </form>
    );
};

export default UserForm;