import * as yup from 'yup';

export const InternalFormValidate = yup.object().shape({
    CardSendId: yup.number()
    .max(1000000000000, "Too Long")
    .min(100000000000, "Too Short"),

    CardReceiveId: yup.number()
    .max(1000000000000, "Too Long")
    .min(100000000000, "Too Short")
    .required('Required'),

    Balance: yup.number()
    .min(100000, 'More than 100,000 VND')
    .required('Required'),

    Description: yup.string()
    .min(10, "Too Short")
    .max(150, "Too Long")
    .required('Required'),

    OTP: yup.number()
    .min(100000, 'wrong otp')
    .max(999999, "wrong otp")
    .required('Required'),
})