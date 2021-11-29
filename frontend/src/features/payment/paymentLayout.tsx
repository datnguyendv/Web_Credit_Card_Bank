import React from 'react';
import { Navigate } from 'react-router';
import { useAppSelector } from '../../app/hooks';
import { ExternalPayment, InternalPayment } from './components';
import { Layout, paymentLayoutState } from './payment-dto';
import { selectPaymentLayoutState } from './paymentLayoutSlice';

export const RenderPaymentLayout: React.FC<paymentLayoutState> = ({Layout}) => {
    switch(Layout) {
        case 'internal': 
            return (
                <InternalPayment/>
            )
        case 'external': 
            return  (
                <ExternalPayment />
            )
        default: 
            return (
                <Navigate to='/' replace={true}/>
            )
    }
}

export const PaymentLayout: React.FC = () => {
    const PaymentLayoutState = useAppSelector(selectPaymentLayoutState);
    return (
        <div>
            <RenderPaymentLayout Layout ={PaymentLayoutState.Layout}/>
        </div>
    )
}