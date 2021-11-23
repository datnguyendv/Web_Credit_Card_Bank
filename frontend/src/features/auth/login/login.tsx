import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loginFunction, selectLoginState } from './loginSlice';
import { Formik, Form, Field  } from 'formik';
import { loginInfo, loginScreenDto, loginState } from './login-dto';
import { LoadingScreen } from '../../waiting/loading-screen';

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
            onSubmit={(values, actions) => {
            dispatch(loginFunction({
                UserName: values.UserName,
                Password: values.Password
            }));
            }}>
                <Form>
                    <label htmlFor="UserName">User Name</label>
                    <Field id="UserName" name="UserName" placeholder="userName" />
                    <label htmlFor="password">Password</label>
                    <Field id="Password" name="Password" placeholder="password" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
        </div>
    )
}