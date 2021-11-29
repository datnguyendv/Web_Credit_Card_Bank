import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectSendMailState, sendMailFunc } from '../../sendmail/sendMailSlice';
import { selectCardState, setOneCard } from '../../home/user/cardInfoSlice';
import { externalTransfer, selectPaymentState, setErrMsg } from '../paymentSlice';
import { selectUserHomeState } from '../../home/user/userSlice';
import { bankName, externalPaymentDto } from '../payment-dto';
import { ExternalFormValidate } from '../form-validate';

export const ExternalPayment: React.FC = () => {
    const accountId = useAppSelector(selectUserHomeState).accountInfo.IdentifyCard;
    const mailState = useAppSelector(selectSendMailState);
    const paymentState = useAppSelector(selectPaymentState);
    const cardState = useAppSelector(selectCardState);
    const [submitBtnState, setSubmitBtnState] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const bank = bankName;
    const externalPayment: externalPaymentDto = {
        CardSendId: `${cardState.cardInfo[0].CardID}`,
        CardReceiveId: '',
        Balance:'',
        Description:'',
        Bank:'',
        OTP:'',
    }
    const processOtp= () => {
        dispatch(sendMailFunc(accountId));
        setSubmitBtnState(false);
    }

    return (
        <div>
            <div>
        <h2>{}</h2>
        <div>
        <Formik
        initialValues={externalPayment}
        validationSchema={ExternalFormValidate}
        onSubmit={(values, actions) => {
            console.log(mailState.code);
            //because type of otp is number but type of values.otp is string so do this to compare
            if(parseInt(values.OTP) === mailState.code) {
                dispatch(externalTransfer(values));
            } else 
            dispatch(setErrMsg('wrong otp'));
        }}>
        {({errors, touched}) => (
            <Form>
                {errors.CardSendId && touched.CardSendId ? (<div>{errors.CardSendId}</div>): null}
                <label htmlFor="CardSendId">CardSendId</label>
                <Field name="CardSendId" component="select">
                {cardState.cardInfo.map(card => 
                    <option 
                        key = {card.CardID} 
                        value = {card.CardID} 
                        onChange = {() => dispatch(setOneCard(card.CardID))}>
                            {card.CardID}
                    </option>
                )}
                </Field>

                {errors.CardReceiveId && touched.CardReceiveId ? (<div>{errors.CardReceiveId}</div>): null}
                <label htmlFor="CardReceiveId">CardReceiveId</label>
                <Field id="CardReceiveId" name="CardReceiveId" placeholder="CardReceiveId" />

                {errors.Bank && touched.Bank ? (<div>{errors.Bank}</div>): null}
                <label htmlFor="Bank">Bank Name</label>
                <Field name="Bank" component="select">
                {bankName.map((item, index)=> 
                    <option
                        key = {index}
                        value = {item}>
                            {item}
                    </option>
                )}
                </Field>

                {errors.Balance && touched.Balance ? (<div>{errors.Balance}</div>): null}
                <label htmlFor="Balance">Balance</label>
                <Field id="Balance" name="Balance" placeholder="Balance" />

                {errors.Description && touched.Description ? (<div>{errors.Description}</div>): null}
                <label htmlFor="Description">Description</label>
                <Field id="Description" name="Description" placeholder="Description" />

                {errors.OTP && touched.OTP ? (<div>{errors.OTP}</div>): null}
                <label htmlFor="OTP">OTP</label>
                <Field id="OTP" name="OTP" placeholder="OTP" />
                <button onClick = {() => {
                    processOtp();
                }}>Get Otp</button>
                <button type="submit">Submit</button>
            </Form>
        )}
        </Formik>
    </div>
    </div>
        </div>
    )
}