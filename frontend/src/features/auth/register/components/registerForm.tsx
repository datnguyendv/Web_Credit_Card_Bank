import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { generateArray } from '.';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { LoadingScreen } from '../../../waiting/loading-screen';
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
        <div>
            <h2>{errMsg}</h2>
            <div>
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
                    <div>
                        {errors.UserName && touched.UserName ? (<span>{errors.UserName}</span>): null}
                        <label htmlFor="UserName">User Name</label>
                        <Field id="UserName" name="UserName" placeholder="userName" />
                    </div>
                    <div>
                        {errors.Password && touched.Password ? (<span>{errors.Password}</span>): null}
                        <label htmlFor="password">Password</label>
                        <Field id="Password" name="Password" placeholder="password" />
                    </div>
                    <div>
                        {errors.FirstName && touched.FirstName ? (<span>{errors.FirstName}</span>): null}
                        <label htmlFor="FirstName">First Name</label>
                        <Field id="FirstName" name="FirstName" placeholder="First Name" />
                    </div>
                    <div>
                        {errors.LastName && touched.LastName ? (<span>{errors.LastName}</span>): null}
                        <label htmlFor="LastName">Last Name</label>
                        <Field id="LastName" name="LastName" placeholder="Last Name" />
                    </div>
                    <div>
                        {errors.Email && touched.Email ? (<span>{errors.Email}</span>): null}
                        <label htmlFor="Email">Email</label>
                        <Field id="Email" name="Email" placeholder="Email" />
                    </div>
                    <div>
                        {errors.PhoneNumber && touched.PhoneNumber ? (<span>{errors.PhoneNumber}</span>): null}
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <Field id="PhoneNumber" name="PhoneNumber" placeholder="Phone Number" />
                    </div>
                    <div>
                        {errors.IdentifyCard && touched.IdentifyCard ? (<span>{errors.IdentifyCard}</span>): null}
                        <label htmlFor="IdentifyCard">Identify Card</label>
                        <Field id="IdentifyCard" name="IdentifyCard" placeholder="Identify Card" />
                    </div>
                    <div>
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
                    </div>
                    <div>
                        {errors.Address && touched.Address ? (<span>{errors.Address}</span>): null}
                        <label htmlFor="Address">Address</label>
                        <Field id="Address" name="Address" placeholder="Address" />
                    </div>
                    <div>
                        <label htmlFor="type">Card Type </label>
                        {/* render when fetching cardtype from server */}
                        {registerInfo.status === 'isLoading'? <LoadingScreen/>:
                            <Field name="type" component="select">
                                {cardType.map(item => <option key = {item.CardTypeId} value ={item.TypeName}> {item.TypeName}</option> )}
                            </Field>
                        }
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            )}
            </Formik>
            </div>
        </div>
    )
}


