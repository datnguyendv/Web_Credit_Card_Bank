import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loginFunction, selectLoginState } from './loginSlice';
import { Formik, Form, Field  } from 'formik';
import { loginInfo } from './login-dto';
import { LoadingScreen } from '../../waiting/loading-screen';

export const renderLogin = (params: any) => {
    if(params.status  === "isLoading") {
        return <LoadingScreen/>
    } else if(params.errMsg !== '') {
        return <h4>{params.errMsg}</h4>
    } else 
    return <h2>{params.token}</h2>
}

export const Login: React.FC = () => {
    const loginInfor: loginInfo = {
        UserName: '',
        Password: ''
    }
    const dispatch = useAppDispatch();

    return(
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
    )
}