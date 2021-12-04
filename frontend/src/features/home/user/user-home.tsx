import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button, Col, Container, Row } from 'reactstrap';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { decodeToken } from '../../auth/jwtProcess/decode-jwt';
import { selectLoginState } from '../../auth/login/loginSlice';
import { ExternalPayment, InternalPayment } from '../../payment/components';
import { Layout } from '../../payment/payment-dto';
import { setPaymentLayout } from '../../payment/paymentLayoutSlice';
import { getCardInfo } from './cardInfoSlice';
import { Header } from './Components/Header';
import { getAccountInfo } from './userSlice';

export const UserHome: React.FC = () => {
    const token = useAppSelector(selectLoginState).token;
    const accountId:number = parseInt(decodeToken.getIdFromJwt(token));
    let navigate = useNavigate();
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAccountInfo(accountId));
        dispatch(getCardInfo(accountId));
    }, [])

    const moveToPayment = (params: Layout) => {
        dispatch(setPaymentLayout(params));
        navigate("/payment", {replace: true});
    }

    return (
        <Container fluid className="container-center">
            <Row sm = "3">
            <Col sm="3" xs="12" lg="3"  className = "">
                <Header />
            </Col>
            <Col sm = "9" xs ="12" lg = "9" className = "user-home-func-background">
                {/* <InternalPayment/> */}
                <ExternalPayment/>
                {/* <Button
                 onClick = {() => moveToPayment('internal')
                }>
                    external
                </Button> */}
                {/* <Button
                 onClick = {() => moveToPayment('external')
                }>
                    external
                </Button> */}
            </Col>
            </Row>
        </Container>
    )
}