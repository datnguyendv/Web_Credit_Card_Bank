import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    UserName: yup.string()
    .min(7, 'Too Short')
    .max(20, 'Too Long')
    .required('Required'),
    Password: yup.string()
    .min(7, 'Too Short')
    .max(20, 'Too Long')
    .required('Required'),
})

export const registerSchema = yup.object().shape({
    UserName: yup.string()
    .min(7, 'Too Short')
    .max(20, 'Too Long')
    .required('Required'),
    Password: yup.string()
    .min(10, 'Too Short')
    .max(20, 'Too Long')
    .required('Required'),
    FirstName:yup.string()
    .min(2, 'Too Short')
    .max(20, 'Too Long')
    .required('Required'),
    Email:yup.string().email('Not a Email'),
    LastName:yup.string()
    .min(2, 'Too Short')
    .max(20, 'Too Long')
    .required('Required'),
    PhoneNumber:yup.number()
    .max(1000000000, 'Too Long')
    .min(100000000,'Too Short')
    .required('Required'),
    IdentifyCard:yup.number()
    .max(1000000000000, "Too Long")
    .min(100000000000, "Too Short"),
    DateOfBirth:yup.string(),
    Address: yup.string()
    .max(50, 'Too Long')
    .min(7, 'Too Short')
})

export const forgotSchema = yup.object().shape({
    UserName: yup.string()
    .min(7, 'Too Short')
    .max(20, 'Too Long')
    .required('Required'),

    Email:yup.string().email('Not a Email'),

    ID:yup.number()
    .max(1000000000000, "Too Long")
    .min(100000000000, "Too Short"),

    
})