import Joi from 'joi';

// Define the Joi schema
const parentSchema = Joi.object({
    fatherName: Joi.string().required().messages({
        'string.empty': 'Father name is required.',
    }),
    motherName: Joi.string().required().messages({
        'string.empty': 'Mother name is required.',
    }),
    fatherPhoneNumber: Joi.string()
        .pattern(/^\d+$/) // Ensure it's numeric
        .required()
        .messages({
            'string.empty': 'Father phone number is required.',
            'string.pattern.base': 'Father phone number must contain only numbers.',
        }),
});

const studentValidationSchemaJoi = Joi.object({
    name: Joi.string()
        .regex(/^[A-Za-z]+$/)
        .trim()
        .required()
        .messages({
            'string.empty': 'Name is required.',
            'string.pattern.base': 'Name must only contain alphabetic characters.',
        }),
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required.',
        'string.email': 'Email must be a valid email address.',
    }),
    phoneNumber: Joi.string()
        .pattern(/^\d+$/)
        .required()
        .messages({
            'string.empty': 'Phone number is required.',
            'string.pattern.base': 'Phone number must contain only numbers.',
        }),
    role: Joi.number().integer().required().messages({
        'number.base': 'Role must be a number.',
        'any.required': 'Role is required.',
    }),
    parentInfo: parentSchema.required().messages({
        'any.required': 'Parent information is required.',
    }),
    bloodGroup: Joi.string()
        .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
        .required()
        .messages({
            'any.only': 'Blood group must be one of A+, A-, B+, B-, O+, O-, AB+, AB-.',
        }),
    accountStatus: Joi.string()
        .valid('active', 'disabled')
        .required()
        .messages({
            'any.only': 'Account status must be either active or disabled.',
        }),
    gender: Joi.string()
        .valid('Male', 'Female', 'Other')
        .required()
        .messages({
            'any.only': 'Gender must be Male, Female, or Other.',
        }),
});


export default studentValidationSchemaJoi;