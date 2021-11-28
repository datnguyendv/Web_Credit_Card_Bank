import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { internalPaymentDto } from '../payment-dto';
import { InternalFormValidate } from '../form-validate';
import { sendMailFunc } from '../../sendmail/sendMailSlice';

export const InternalPayment: React.FC = () => {
    const internalPaymentInfo: internalPaymentDto = {
        CardSendId: 0,
        CardReceiveId: 0,
        Balance: 0,
        Description: "",
        OTP: 0
    }
    // const account = useAppSelector(select)
    const [submitBtnState, setSubmitBtnState] = useState<boolean>(true);
    const dispatch = useAppDispatch();

    const processOtp= () => {
        // dispatch(sendMailFunc())
        setSubmitBtnState(false);
    }

    return (
    <div>
            <h2>{}</h2>
        <div>
            <Formik
            initialValues={internalPaymentInfo}
            validationSchema={InternalFormValidate}
            onSubmit={(values, actions) => {
                // dispatch(loginFunction(values));
            }}>
            {({errors, touched}) => (
                <Form>
                    {errors.CardSendId && touched.CardSendId ? (<div>{errors.CardSendId}</div>): null}
                    <label htmlFor="CardSendId">Account</label>
                    <Field id="CardSendId" name="CardSendId" placeholder="userName" />

                    {errors.CardReceiveId && touched.CardReceiveId ? (<div>{errors.CardReceiveId}</div>): null}
                    <label htmlFor="CardReceiveId">CardReceiveId</label>
                    <Field id="CardReceiveId" name="CardReceiveId" placeholder="Enter/select beneficiary account VND" />
                    
                    {errors.Balance && touched.Balance ? (<div>{errors.Balance}</div>): null}
                    <label htmlFor="Balance">Amount</label>
                    <Field id="Balance" name="Balance" placeholder="Amount" />
                    
                    {errors.Description && touched.Description ? (<div>{errors.Description}</div>): null}
                    <label htmlFor="Description">Description</label>
                    <Field id="Description" name="Description" placeholder="NGUYEN VAN DAT chuyen khoan" />

                    {errors.OTP && touched.OTP ? (<div>{errors.OTP}</div>): null}
                    <label htmlFor="Description">OTP</label>
                    <Field id="OTP" name="OTP" placeholder="OTP" />
                    <button
                     onClick = {() => processOtp()}>Get OTP</button>
                    <button type="submit" disabled = {submitBtnState}>Submit</button>
                </Form>
            )}
            </Formik>
        </div>
    </div>
    )
}