import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Col, Container, InputGroup, InputGroupText, Row } from 'reactstrap';
import { generateArray } from '.';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import '../../../css/App.css';
import '../../../css/auth.css';
import '../../../css/register.css';
import { registerSchema } from '../../form-validate/auth-validate';
import { checkAccountExist } from '../accountExistedSlice';
import { cardType, registerFormDataDto, registerFormDto, registerInfoFormDto } from '../register-dto';
import { cardTypeInfo, selectRegisterState } from '../registerInfoSlice';

export const Register: React.FC<{errMsg:string}> = ({errMsg}) => {
    let registerForm: registerFormDto = registerFormDataDto;
    let registerInfo:registerInfoFormDto = useAppSelector(selectRegisterState);
    
    // day just have from 1 to 31 
    let day = generateArray(1,31);

    // just have 12 month per year
    let month = generateArray(1,12);
    
    // see on web and see that from 1921 upto now 
    let year = generateArray(1921, 2021);
    
    let dispatch = useAppDispatch();
    
    // const [cardType, setCardType] = useState([]);
    let cardType:cardType[] = registerInfo.cardType;
   

    useEffect(() => {
        console.log(' in here');
        //fetch cardtype from server to client for user to choose
        dispatch(cardTypeInfo());
    }, [])

    return(
        <Container
        className = "container-center"
        fluid>
            <Row className = "display-flex ">
                <Col lg = "5" md="6" sm= "8" xs = "11" className = "">
                    <Row md = "1" className='center-text'>
                        <div>
                            <span className="welcome-font regis-font-wc">Welcome to </span>
                            <h1 className ="iub-auth-font regis-font-iu">IU BANK</h1>
                        </div>
                    </Row>
                    
                    <Row md = "1" className = 'center-text regis-auth-form'>
                        <p>{errMsg}</p>
                        <Formik
                            initialValues={registerForm}
                            validationSchema={registerSchema}
                            onSubmit={(values, actions) => {
                            //because phone number and indentifycard in form return string value so need change to number
                            values.PhoneNumber = Number(values.PhoneNumber);
                            values.IdentifyCard = Number(values.IdentifyCard);
                            dispatch(checkAccountExist(values));
                        }}>
                        {({errors, touched}) => (
                            <Form>
                                <Row xs = "3" sm ="2" className ="display-flex">
                                    <Col xs = "12" sm="12" className="register-title">
                                        <h5><b>Account Infomation:</b></h5>
                                    </Col>
                                    <Col xs ="12" sm ="6">
                                        <div className= "regis-err-msg">
                                            {errors.UserName && touched.UserName ? (<span>{errors.UserName}</span>): null}
                                        </div>
                                        <div className={errors.UserName?" regis-input-group display-flex wrong-input" : "regis-input-group display-flex" }>
                                            <div className= 'regis-icon-field'>
                                                <FontAwesomeIcon icon={['fas', 'user']}  />
                                            </div>
                                                <Field id="UserName" className="regis-input-field" name="UserName" placeholder="userName" />
                                        </div>
                                    </Col>
                                    <Col xs ="12" sm ="6">
                                        <div className= "regis-err-msg">
                                            {errors.Password && touched.Password ? (<span>{errors.Password}</span>): null}
                                        </div>
                                        <div className={errors.Password?" regis-input-group display-flex wrong-input" : "regis-input-group display-flex"}>
                                            <div className ="regis-icon-field">
                                                <FontAwesomeIcon icon={['fas', 'lock']}  />
                                            </div>
                                            <Field id="Password" className="regis-input-field" type="password" name="Password" placeholder="password" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row xs = "1" sm ="3" className ="display-flex">
                                    <Col  xs = "12" sm="12" className="register-title">
                                        <h5><b>Personal Information:</b></h5>
                                    </Col>
                                    <Col xs ="12" sm ="6">
                                        <div className= "regis-err-msg">
                                            {errors.FirstName && touched.FirstName ? (<span>{errors.FirstName}</span>): null}
                                        </div>
                                        <div className={errors.FirstName?" regis-input-group display-flex wrong-input" : "regis-input-group display-flex"}>
                                            <div className ="regis-icon-field">
                                                <FontAwesomeIcon icon={['fas', 'user']} />
                                            </div>
                                            <Field id="FirstName" className="regis-input-field" name="FirstName" placeholder="First Name" />
                                        </div>
                                    </Col>
                                    <Col xs ="12" sm ="6">
                                        <div className= "regis-err-msg">
                                            {errors.LastName && touched.LastName ? (<span>{errors.LastName}</span>): null}
                                        </div>
                                        <div className={errors.FirstName?" regis-input-group display-flex wrong-input" : "regis-input-group display-flex"}>
                                            <div className ="regis-icon-field">
                                            <FontAwesomeIcon icon={['fas', 'user']} />
                                        </div>
                                        <Field id="LastName" className="regis-input-field" name="LastName" placeholder="Last Name" />
                                    </div>
                                    </Col>
                                </Row>
                                <Row xs = "1" className ="display-flex">
                                    <Col xs ="12" sm= "12">
                                        <div className= "regis-err-msg">
                                            {errors.Email && touched.Email ? (<span>{errors.Email}</span>): null}
                                        </div>
                                        <div className={errors.FirstName?" regis-input-group display-flex wrong-input" : "regis-input-group display-flex"}>
                                            <div className ="regis-icon-field">
                                            <FontAwesomeIcon icon={['fas', 'envelope']} />
                                        </div>
                                        <Field id="Email" className="regis-input-field" name="Email" placeholder="Email" />
                                    </div>
                                    </Col>
                                </Row>
                                <Row xs = "1" className ="display-flex">
                                    <Col xs ="12" sm= "12">
                                        <div className= "regis-err-msg">
                                            {errors.PhoneNumber && touched.PhoneNumber ? (<span>{errors.PhoneNumber}</span>): null}
                                        </div>
                                        <div className={errors.FirstName?" regis-input-group display-flex wrong-input" : "regis-input-group display-flex"}>
                                            <div className ="regis-icon-field">
                                                <FontAwesomeIcon icon={['fas', 'phone']} />
                                            </div>
                                            <Field id="PhoneNumber" className="regis-input-field" name="PhoneNumber" placeholder= "PhoneNumber"/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row xs = "1" className ="display-flex">
                                    <Col xs ="12" sm= "12">
                                        <div className= "regis-err-msg">
                                            {errors.IdentifyCard && touched.IdentifyCard ? (<span>{errors.IdentifyCard}</span>): null}
                                            </div>
                                        <div className={errors.FirstName?" regis-input-group display-flex wrong-input" : "regis-input-group display-flex"}>
                                            <div className ="regis-icon-field">
                                                <FontAwesomeIcon icon={['far', 'id-card']}  />
                                            </div>
                                            <Field id="IdentifyCard" className="regis-input-field" name="IdentifyCard" placeholder="Identify Card" />
                                        </div>
                                    </Col>
                                </Row>
                                
                                <Row xs = "1" className ="display-flex">
                                    <Col xs ="12" sm= "12">
                                        <div className= "regis-err-msg">
                                    {errors.Address && touched.Address ? (<span>{errors.Address}</span>): null}
                                    </div>
                                        <div className={errors.FirstName?" regis-input-group display-flex wrong-input" : "regis-input-group display-flex"}>
                                            <div className ="regis-icon-field">
                                                <FontAwesomeIcon icon={['fas', 'map-marked']}  />
                                            </div>
                                            <Field id="Address" className="regis-input-field"  name="Address" placeholder="Address" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>

                                </Row>
                                <Row xs = "1" sm="2" lg ="2" className ="display-flex regis-margin-top">
                                    <Col md= "7" xs = "12" sm ="7" className = "regis-select-field">
                                        <label className= "register-label" htmlFor="Date Of Birth">Date Of Birth: </label>
                                        <Field name="day" className="select-option" component="select">
                                            {day.map(i => <option key={i} value={i} >{i}</option>)}
                                        </Field>

                                        <Field name="month" component="select" className="select-option">
                                            {month.map(i => <option  key={i} value={i} >{i}</option>)}
                                        </Field>

                                        <Field name="year" component="select" className="select-option">
                                            {/* render Option choose Year */}
                                            {year.map(i => <option key={i} value={i} >{i}</option>)}
                                        </Field>
                                    </Col>
                                    <Col md ="5" xs = "12" sm ="5" className = "regis-select-field">
                                        <label className= "register-label"  htmlFor="type">Card Type </label>
                                        {/* render when fetching cardtype from server */}
                                        <Field name="type" component="select" className="select-option">
                                            {cardType.map(item => <option key = {item.CardTypeId} value ={item.TypeName}> {item.TypeName}</option> )}
                                        </Field>
                                    </Col>
                                </Row>
                                <Row md = "1" className = 'center-text'>
                                    <Col>
                                        <button type="submit" className="auth-button">Submit</button>
                                    </Col>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


