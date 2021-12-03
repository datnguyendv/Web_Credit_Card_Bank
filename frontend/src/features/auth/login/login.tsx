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
        <Row className = "display-flex  animate__animated animate__fadeIn">
            <Col lg = "5" md="6" sm= "8" xs = "11" className="margin-layout">

                <Row className = "other-login"></Row>

                <Row md = "1" className='center-text'>
                    <div>
                        <h4 className="welcome-font">Welcome back! </h4>
                        <h1 className ="iub-auth-font">IU BANK</h1>
                    </div>
                </Row>

                <Row md = "1" className = 'center-text auth-form'>
                    <p className ="reset-margin">{loginStated.errMsg}</p>
                    <Formik
                    initialValues={loginInfor}
                    validationSchema={loginSchema}
                    onSubmit={(values, actions) => {
                    // loginFunction(values);
                    dispatch(loginFunction(values));
                    }}>
                    {({errors, touched}) => (
                        <Form >
                            <Row xs = "2" sm ="2" className ="display-flex center-text">
                                <Col xs ="11" sm ="10" lg="9">
                                    <div className= "regis-err-msg">
                                        {errors.UserName && touched.UserName ? (<p>{errors.UserName}</p>): (<p> </p>)}
                                    </div>
                                    <div className={errors.UserName?" regis-input-group display-flex wrong-input" : "regis-input-group display-flex" }>
                                        <div className= "input-icons">
                                            <FontAwesomeIcon icon={['fas', 'user']} color = "rgb(97, 53, 53)" />
                                        </div>
                                        <Field id="UserName" className="input-field" name="UserName" placeholder="Enter your username" />
                                    </div>
                                </Col>
                            </Row>
                            <Row xs = "2" sm ="2" className ="display-flex">
                                <Col xs ="11" sm ="10" lg="9">
                                    <div className= "regis-err-msg">
                                        {errors.Password && touched.Password ? (<p>{errors.Password}</p>): (<p> </p>)}
                                    </div>
                                    <div className={errors.UserName?" regis-input-group display-flex wrong-input" : "regis-input-group display-flex" }>
                                        <div className= "input-icons">
                                            <FontAwesomeIcon icon={['fas', 'lock']} color = "rgb(97, 53, 53)" />
                                        </div>
                                        <Field id="Password" type= 'password' className="input-field "name="Password" placeholder="Enter your password" />
                                    </div>
                                </Col>
                            </Row>
                            <Row md = "1" xs= "1" sm="1" className = 'center-text auth-col-submit'>
                                <Col>
                                    <button type="submit" className='auth-button'>ENTER</button>
                                </Col>
                                <Col>
                                    <a href = 'http://localhost:3000/resetpass'>Forget password? </a>
                                </Col>
                            </Row>
                        </Form>
                    )}
                    </Formik>
                </Row>
            </Col>

            <Row xs= "1" className ='register-link'>
                <Col className= "center-text">
                    <span >Don't have account yet? </span><a href = 'http://localhost:3000/register'>Register here</a>
                </Col>
                <Col className= "center-text other-login"> 
                    <p> Login with</p>
                    <a href = "https://mail.google.com/" target= '_blank' rel = 'noopener'>
                        <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
                    </a>
                    <a href = "https://www.facebook.com" target= '_blank' rel = 'noopener'>
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
                    </a>
                    <a href = "https://twitter.com" target= '_blank' rel = 'noopener'>
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                </Col>
            </Row>
        </Row>
    </Container>
    )
}
