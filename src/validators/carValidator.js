import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters, 1-20'
    }),
    price: Joi.number().min(0).max(1_000_000).required().messages({
        'number.base': 'Only numbers',
        'number.min': 'At least 0',
        'number.max': 'Not more then 1000000',
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min': 'Not older then 1990',
        'number.max': `Not younger then ${new Date().getFullYear()}`,
    })
});

export {carValidator};