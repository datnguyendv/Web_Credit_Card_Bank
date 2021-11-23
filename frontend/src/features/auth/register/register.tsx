import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from '../../../app/hooks';
import { registerSchema } from '../form-validate/auth-validate';
import { registerFormDataDto, registerFormDto } from './register-dto';
import { generateArray } from './generate';

export const Register: React.FC = () => {
    let registerInfo: registerFormDto = registerFormDataDto;
    const [startDate, setStartDate] = useState(new Date());
    let day = generateArray(1,31);
    let month = generateArray(1,12);
    let year = generateArray(1921, 2021);
    let dispatch = useAppDispatch();
    return(
        <div>
            <div>
            <Formik
            initialValues={registerInfo}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
                // values.DateOfBirth ;
                values.PhoneNumber = Number(values.PhoneNumber);
                values.IdentifyCard = Number(values.IdentifyCard);
                console.log(values);
            // dispatch();
            }}>
            {({errors, touched}) => (
                <Form>
                    <div>
                    {errors.UserName && touched.UserName ? (<div>{errors.UserName}</div>): null}
                    <label htmlFor="UserName">User Name</label>
                    <Field id="UserName" name="UserName" placeholder="userName" />
                    </div>
                    <div>
                    {errors.Password && touched.Password ? (<div>{errors.Password}</div>): null}
                    <label htmlFor="password">Password</label>
                    <Field id="Password" name="Password" placeholder="password" />
                    </div>
                    <div>
                    {errors.FirstName && touched.FirstName ? (<div>{errors.FirstName}</div>): null}
                    <label htmlFor="FirstName">First Name</label>
                    <Field id="FirstName" name="FirstName" placeholder="First Name" />
                    </div>
                    <div>
                    {errors.LastName && touched.LastName ? (<div>{errors.LastName}</div>): null}
                    <label htmlFor="LastName">LastN ame</label>
                    <Field id="LastName" name="LastName" placeholder="Last Name" />
                    </div>
                    <div>
                    {errors.PhoneNumber && touched.PhoneNumber ? (<div>{errors.PhoneNumber}</div>): null}
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <Field id="PhoneNumber" name="PhoneNumber" placeholder="Phone Number" />
                    </div>
                    <div>
                    {errors.IdentifyCard && touched.IdentifyCard ? (<div>{errors.IdentifyCard}</div>): null}
                    <label htmlFor="IdentifyCard">Identify Card</label>
                    <Field id="IdentifyCard" name="IdentifyCard" placeholder="Identify Card" />
                    </div>
                    <div>
                    <label htmlFor="Date Of Birth">Date Of Birth </label>

                    <Field name="day" component="select">
                        {day.map(i => <option key={i} value={i} >{i}</option>)}
                    </Field>
                    <Field name="month" component="select">
                        {/* <option value="red">Red</option> */}
                        {month.map(i => <option  key={i} value={i} >{i}</option>)}
                    </Field>
                    <Field name="year" component="select">
                        {/* <option value="red">Red</option> */}
                        {year.map(i => <option key={i} value={i} >{i}</option>)}
                    </Field>
                    </div>
                    <div>
                    {errors.Address && touched.Address ? (<div>{errors.Address}</div>): null}
                    <label htmlFor="Address">Address</label>
                    <Field id="Address" name="Address" placeholder="Address" />
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


