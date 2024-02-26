import Joi from "joi";

const registerValidator = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base': 'First letter, then letters, digits or "_", 2-20 symbols',
    }),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required().messages({
        'string.pattern.base': 'Min 1: uppercase, digit, lowercase, special symbol, 8-20 symbols'
    }),
    re_password: Joi.any().equal(Joi.ref('password')).required().messages({
        'any.only': "Password doesn't match"
    })
})

export {registerValidator};