import Joi from "joi";

const registerValidator = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages(),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required().messages(),
    re_password: Joi.any().equal(Joi.ref('password')).required().messages({
        'any.only': "password doesn't match"
    })
})

export {registerValidator};