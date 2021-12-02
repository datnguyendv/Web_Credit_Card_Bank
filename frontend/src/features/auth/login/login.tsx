import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Col, Container, InputGroup, InputGroupText, Row } from 'reactstrap';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loginSchema } from '../form-validate/auth-validate';
import { loginInfo, loginState } from './login-dto';
import { loginFunction, selectLoginState } from './loginSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/App.css';
import '../../css/auth.css'


export const Login: React.FC = () => {
    const loginInfor: loginInfo = {
        UserName: '',
        Password: ''
    }
    let loginStated:loginState = useAppSelector(selectLoginState);
    const dispatch = useAppDispatch();

    return(
    <Container fluid className="container-center">
        <Col lg = {{
            offset: 3,
            size:6
        }}
        md={{
        offset: 2,
        size: 8
        }}
        sm= {{
        offset: 2,
        size: 8
        }}
        xs = "11" className="margin-layout">
        <Row className = "other-login">

        </Row>
        <Row>
            <Col className= "center-text">
                <h4 className="welcome-font">Welcome back! </h4>
                <h1 className ="iub-auth-font">IU BANK</h1>
            </Col>
        </Row>
             
            
        <Row>
            <Col
            md= {{
            }} xs = {{
                size:12
            }} 
            className= "auth-form">
            <p>{loginStated.errMsg}</p>
            <Formik
            initialValues={loginInfor}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
                // loginFunction(values);
                dispatch(loginFunction(values));
            }}>
            {({errors, touched}) => (
                <Form >
                <Row className = "display-flex">
                    <Col xs="12" md={{
                        size:10
                    }} className = "margin-text margin-layout err-msg">
                        {errors.UserName && touched.UserName ? (<p>{errors.UserName}</p>): (<p> </p>)}
                    </Col>
                    <Col xs="12" md={{
                        size:10
                    }} className="margin-left">
                        <Row xs ="2" className=" input-group display-flex" >
                            <Col xs = "1" className = "input-icons">
                                <FontAwesomeIcon icon={['fas', 'user']} color = "rgb(97, 53, 53)" />
                            </Col>
                            <Col xs="10">
                                <Field id="UserName" className="input-field" name="UserName" placeholder="Enter your username" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" md={{
                        size:10
                    }} className = "margin-text margin-layout err-msg">
                        {errors.Password && touched.Password ? (<p>{errors.Password}</p>): (<p> </p>)}
                    </Col>
                    <Col xs="12" md={{
                        size:10
                    }} className="margin-left">
                        <Row xs ="2" className = "input-group display-flex">
                            <Col xs = "1" className = "input-icons">
                                    <FontAwesomeIcon icon={['fas', 'lock']} color = "rgb(97, 53, 53)" />
                            </Col>
                            <Col xs = "10">
                                <Field id="Password" type= 'password' className="input-field "name="Password" placeholder="Enter your password" />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="12" xs={{
                        size:12
                    }} className = "center-text auth-col-submit">
                        <Row xs ="1">
                            <Col>
                                <button type="submit" className='auth-button'>ENTER</button>
                            </Col>
                            <Col> 
                                <a href = 'http://localhost:3000/resetpass'>Forget password? </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Form>
            )}
            </Formik>
            </Col>
        </Row>

        <Row xs= "1" className ='register-link'>
            <Col className= "center-text">
                <span >Don't have account yet? </span><a href = 'http://localhost:3000/register'><span>Register here </span></a>
            </Col>
            <Col className= "center-text other-login"> 
                <p> Login with</p>
                <a href = "https://mail.google.com/" target= '_blank' rel = 'noopener'>
                    <FontAwesomeIcon icon={['fab', 'google-plus-g']} size ='2x' />
                </a>
                <a href = "https://www.facebook.com" target= '_blank' rel = 'noopener'>
                    <FontAwesomeIcon icon={['fab', 'facebook-square']}  size ='2x'/>
                </a>
                <a href = "https://twitter.com" target= '_blank' rel = 'noopener'>
                    <FontAwesomeIcon icon={['fab', 'twitter']} size ='2x' />
                </a>
            </Col>
        </Row>
        </Col>
    </Container>
    )
}
