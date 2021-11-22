import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loginState, selectLoginState, setInfo } from './login-slice';
import { Formik, Form, Field  } from 'formik';

export const Login: React.FC = () => {
    const loginInfor: loginState = useAppSelector(selectLoginState);
    const initialValues = { firstName: '' };
    const dispatch = useAppDispatch();

    return(
        <div>
            <p>{loginInfor.userName}</p>
            <p>{loginInfor.password}</p>
            <Formik
            initialValues={loginInfor}
            onSubmit={(values, actions) => {
            dispatch(setInfo({
                userName: values.userName,
                password: values.password
            }));
            }}>
                <Form>
                    <label htmlFor="userName">User Name</label>
                    <Field id="userName" name="userName" placeholder="userName" />
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="password" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>

        )
    }