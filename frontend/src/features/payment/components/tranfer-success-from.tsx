import React from 'react';
import { useNavigate } from 'react-router';
import { externalPaymentDto } from '../payment-dto';

export const TransferSuccessFrom: React.FC<externalPaymentDto> = ({CardSendId, CardReceiveId, Balance, Bank, Description, OTP}) => {
    const navigate = useNavigate();
    return (
        <div>
            <h5>Card Send: {CardSendId}</h5>
            <h5>Card Receive: {CardReceiveId}</h5>
            {Bank !== ''? <h5>Bank: {Bank}</h5>: <h5></h5>}
            <h5>Balance: {Balance}</h5>
            <h5>Content: {Description}</h5>
            <button
             onClick = {() => navigate('/', {replace: true})}>
                Confirm
            </button>
        </div>
    )
}