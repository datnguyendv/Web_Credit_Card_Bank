import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { LoadingScreen } from '../../waiting/loading-screen';
import { forgotSchema } from '../form-validate/auth-validate';
import { changePassState, forgotPassDto } from './forgot-pass-dto';
import { forgotPass, selectChangePassState } from './forgotPassSlice';

export const ForgotPassForm: React.FC = () => {
    const forgotPassInfo: forgotPassDto = {
        UserName: '',
        ID: 0,
        Email: 'string',
    }
    let forgotPassState:changePassState = useAppSelector(selectChangePassState);
    const dispatch = useAppDispatch();

    return(
        <div>
            <h2>{forgotPassState.errMsg}</h2>
        <div>
            <Formik
            initialValues={forgotPassInfo}
            validationSchema={forgotSchema}
            onSubmit={(values, actions) => {
                // loginFunction(values);
                dispatch(forgotPass(values));
            }}>
            {({errors, touched}) => (
                <Form>
                    {errors.UserName && touched.UserName ? (<div>{errors.UserName}</div>): null}
                    <label htmlFor="UserName">User Name</label>
                    <Field id="UserName" name="UserName" placeholder="userName" />

                    {errors.ID && touched.ID ? (<div>{errors.ID}</div>): null}
                    <label htmlFor="ID">ID</label>
                    <Field id="ID" name="ID" placeholder="ID" />

                    {errors.Email && touched.Email ? (<div>{errors.Email}</div>): null}
                    <label htmlFor="Email">Email</label>
                    <Field id="Email" type= 'Email' name="Email" placeholder="Email" />

                    <button type="submit">Submit</button>
                </Form>
            )}
            </Formik>
        </div>
        </div>
    )
}

export const SuccessResetPass: React.FC = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h2>done reset pass </h2>
            <button 
            onClick ={() => navigate('/', {replace: true})}>Confirm</button>
        </div>
    )
}

const ForgotPassLayout: React.FC = () => {
    const forgotPassState:changePassState = useAppSelector(selectChangePassState);
    switch (forgotPassState.status) {
        case 'isLoading': 
            return (<LoadingScreen />);
        case 'idle':
            if (forgotPassState.state !== '') {
                return (<SuccessResetPass />)
            } else {
                return(<ForgotPassForm/>)
            }
        default: {
            return (<ForgotPassForm/>)
        }
    }
}

export default ForgotPassLayout;