import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loginSchema } from '../form-validate/auth-validate';
import { loginInfo, loginState } from './login-dto';
import { loginFunction, selectLoginState } from './loginSlice';

export const Login: React.FC = () => {
    const loginInfor: loginInfo = {
        UserName: '',
        Password: ''
    }
    let loginStated:loginState = useAppSelector(selectLoginState);
    const dispatch = useAppDispatch();

    return(
        <div>
            <h2>{loginStated.errMsg}</h2>
        <div>
            <Formik
            initialValues={loginInfor}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
                // loginFunction(values);
                dispatch(loginFunction(values));
            }}>
            {({errors, touched}) => (
                <Form>
                    {errors.UserName && touched.UserName ? (<div>{errors.UserName}</div>): null}
                    <label htmlFor="UserName">User Name</label>
                    <Field id="UserName" name="UserName" placeholder="userName" />
                    {errors.Password && touched.Password ? (<div>{errors.Password}</div>): null}
                    <label htmlFor="password">Password</label>
                    <Field id="Password" name="Password" placeholder="password" />
                    <button type="submit">Submit</button>
                </Form>
            )}
            </Formik>
        </div>
        <div>
            <a href = 'http://localhost:3000/register'>Dont have account? </a>
        </div>
        </div>
    )
}