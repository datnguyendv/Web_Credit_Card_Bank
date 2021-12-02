import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Container, InputGroup, InputGroupText, Row , Col } from 'reactstrap';
import { generateArray } from '.';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import '../../../css/App.css';
import '../../../css/auth.css';
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
        className = "container-center display-grid"
        fluid = 'lg'>

            <Row className= "auth-layout">
                <Row md = "2" className='center-text margin-text'>
                    <span className="welcome-font">Welcome to </span>
                    <h1 className ="iub-auth-font">IU BANK</h1>
                </Row>
                <Row md = "1" className = 'center-text auth-form '>
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
                                <Row xs = "2" className = "auth-row">
                                    <Col>
                                        {/* {errors.UserName && touched.UserName ? (<span>{errors.UserName}</span>): null} */}
                                        {/* <InputGroup className={errors.UserName?"input-group wrong-input" : "input-group" }>
                                            <InputGroupText className ="input-icons">
                                                <FontAwesomeIcon icon={['fas', 'user']} size ='2x' color = "rgb(97, 53, 53)" />
                                            </InputGroupText> */}
                                            <Field id="UserName" className="input-field-regis-form" name="UserName" placeholder="userName" />
                                        {/* </InputGroup> */}
                                    </Col>
                                    <Col>
                                        {/* {errors.Password && touched.Password ? (<span>{errors.Password}</span>): null}
                                        <InputGroup className={errors.Password?"input-group wrong-input" : "input-group" }>
                                            <InputGroupText className ="input-icons">
                                                <FontAwesomeIcon icon={['fas', 'user']} size ='2x' color = "rgb(97, 53, 53)" />
                                            </InputGroupText> */}
                                            <Field id="Password" className="input-field-regis-form" type="password" name="Password" placeholder="password" />
                                        {/* </InputGroup> */}
                                    </Col>
                                </Row>
                                <Row className = "auth-row">
                                    {errors.FirstName && touched.FirstName ? (<span>{errors.FirstName}</span>): null}
                                    <InputGroup className={errors.Password?"input-group wrong-input" : "input-group" }>
                                        <InputGroupText className ="input-icons">
                                            <FontAwesomeIcon icon={['fas', 'user']} size ='2x' color = "rgb(97, 53, 53)" />
                                        </InputGroupText>
                                        <Field id="FirstName" className="input-field-regis-form" name="FirstName" placeholder="First Name" />
                                    </InputGroup>
                                </Row>
                                <Row className = "auth-row">
                                    {errors.LastName && touched.LastName ? (<span>{errors.LastName}</span>): null}
                                    <InputGroup className={errors.Password?"input-group wrong-input" : "input-group" }>
                                        <InputGroupText className ="input-icons">
                                            <FontAwesomeIcon icon={['fas', 'user']} size ='2x' color = "rgb(97, 53, 53)" />
                                        </InputGroupText>
                                        <Field id="LastName" className="input-field-regis-form" name="LastName" placeholder="Last Name" />
                                    </InputGroup>
                                </Row>
                                <Row className = "auth-row">
                                    {errors.Email && touched.Email ? (<span>{errors.Email}</span>): null}
                                    <InputGroup className={errors.Password?"input-group wrong-input" : "input-group" }>
                                        <InputGroupText className ="input-icons">
                                            <FontAwesomeIcon icon={['fas', 'user']} size ='2x' color = "rgb(97, 53, 53)" />
                                        </InputGroupText>
                                    <Field id="Email" className="input-field-regis-form" name="Email" placeholder="Email" />
                                    </InputGroup>
                                </Row>
                                <Row className = "auth-row">
                                    {errors.PhoneNumber && touched.PhoneNumber ? (<span>{errors.PhoneNumber}</span>): null}
                                    <InputGroup className={errors.Password?"input-group wrong-input" : "input-group" }>
                                        <InputGroupText className ="input-icons">
                                            <FontAwesomeIcon icon={['fas', 'user']} size ='2x' color = "rgb(97, 53, 53)" />
                                        </InputGroupText>
                                        <Field id="PhoneNumber" className="input-field-regis-form" name="PhoneNumber" placeholder= "PhoneNumber"/>
                                    </InputGroup>
                                </Row>
                                <Row className = "auth-row">
                                    {errors.IdentifyCard && touched.IdentifyCard ? (<span>{errors.IdentifyCard}</span>): null}
                                    <InputGroup className={errors.IdentifyCard?"input-group wrong-input" : "input-group" }>
                                        <InputGroupText className ="input-icons">
                                            <FontAwesomeIcon icon={['fas', 'user']} size ='2x' color = "rgb(97, 53, 53)" />
                                        </InputGroupText>
                                        <Field id="IdentifyCard" className="input-field-regis-form" name="IdentifyCard" placeholder="Identify Card" />
                                    </InputGroup>
                                </Row>
                                <Row>
                                    <label htmlFor="Date Of Birth">Date Of Birth </label>
                                    <Field name="day" component="select">
                                        {day.map(i => <option key={i} value={i} >{i}</option>)}
                                    </Field>

                                    <Field name="month" component="select">
                                        {month.map(i => <option  key={i} value={i} >{i}</option>)}
                                    </Field>

                                    <Field name="year" component="select">
                                        {/* render Option choose Year */}
                                        {year.map(i => <option key={i} value={i} >{i}</option>)}
                                    </Field>
                                </Row>
                                <Row className = "auth-row">
                                    {errors.Address && touched.Address ? (<span>{errors.Address}</span>): null}
                                    <InputGroup className={errors.IdentifyCard?"input-group wrong-input" : "input-group" }>
                                        <InputGroupText className ="input-icons">
                                            <FontAwesomeIcon icon={['fas', 'user']} size ='2x' color = "rgb(97, 53, 53)" />
                                        </InputGroupText>
                                    <Field id="Address" className="input-field-regis-form"  name="Address" placeholder="Address" />
                                    </InputGroup>
                                </Row>
                                <Row className = "auth-row">
                                    <label htmlFor="type">Card Type </label>
                                    {/* render when fetching cardtype from server */}
                                    <Field name="type" component="select">
                                        {cardType.map(item => <option key = {item.CardTypeId} value ={item.TypeName}> {item.TypeName}</option> )}
                                    </Field>
                                </Row>
                                <Row className = "auth-row">
                                    <button type="submit">Submit</button>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                </Row>
            </Row>
        </Container>
    )
}


