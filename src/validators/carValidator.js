import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 20'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'Are you serious?',
        'number.max': 'Not more then 1_000_000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min': 'Only from 1990',
        'number.max': 'Are you serious?'
    })
})

export {carValidator};