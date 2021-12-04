import React from 'react';
import { Button, Carousel, CarouselCaption, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
import '../../../css/App.css';
import '../../../css/auth.css';
import '../../../css/register.css';
import '../../../css/home.css';
import TranferImg from '../../../css/transfer.png';
import dimond from '../../../css/diamond.png';
import quick from '../../../css/Group 8.png';
import Cash from '../../../css/Group 10.png';
import transtatus from '../../../css/Group 11.png';
import saveMoney from '../../../css/coin-bag-line.png';
import qr from '../../../css/qr-scanner.png';
import bank from '../../../css/bank.png';
import { useAppDispatch } from '../../../../app/hooks';
import { setPaymentLayout } from '../../../payment/paymentLayoutSlice';
import { Layout } from '../../../payment/payment-dto';
import { setUserHomeLayout } from '../userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeCarousel } from './Carousel';

export const UserHomeLayout: React.FC = () => {
    const dispatch = useAppDispatch();


    const moveToPayment = (params: Layout, layout:string) => {
        dispatch(setPaymentLayout(params));
        dispatch(setUserHomeLayout(layout));
    }
    const movingLayout = (params: string) => {
        dispatch(setUserHomeLayout(params))
    }

    return (
        <Row xs = "1" lg = "1" sm = "1" md = "1" xl ="1" xxl = "1" className = "display-flex full-view animate__animated animate__fadeIn">
            <Col>
            <Row>
                <h2 className= "header-bank-font">IU BANK</h2>
            </Row>
            <Row md = "1" lg = "1" xs="1" className = 'display-flex transform-body overflow-auto'>
                <Col lg = "8" md="8" sm= "12" xs = "11" >
                    <Row>
                            <HomeCarousel/>
                    </Row>
                    <Row className="justify-content-center">
                        <Button className ="function-btn btn-home btn-grad-home m-4 border-0" 
                         onClick= {() => moveToPayment('internal', 'payment')}>
                            <img src={TranferImg} />
                            <p>Internal Transfer</p>
                        </Button>
                        <Button className ="function-btn btn-home btn-grad-home m-4 border-0" >
                            <img src={dimond} />
                            <p>IUB Rewards</p>
                        </Button>
                        <Button className ="function-btn btn-home btn-grad-home m-4 border-0" 
                        onClick= {() => moveToPayment('external', 'payment')}>
                            <img src={quick} />
                            <p>Quick Transfer 24/7</p>
                        </Button>
                        <Button className ="function-btn btn-home btn-grad-home m-4 border-0"
                        onClick= {() => movingLayout("lockCard")} >
                            <FontAwesomeIcon icon={['fas', 'lock']} />
                            <p>Lock Card</p>
                        </Button>
                        <Button className ="function-btn btn-home btn-grad-home m-4 border-0" 
                        onClick = {() => movingLayout("changePass")}>
                            <img src={saveMoney} />
                            <p>Change Password</p>
                        </Button>
                    </Row>
                </Col>
                <Col lg = "12" md="12" sm= "12" xs = "11" className = "p-0" >
                    <div className = "hastag">
                        <p>Transfer</p>
                    </div>
                </Col>
                <Col lg = "8" md="8" sm= "12" xs = "11" >
                    <Row className="justify-content-center ">
                        <Button className ="btn-home m-4 btn-other" 
                        onClick= {() => moveToPayment('internal', 'payment')}>
                            <img src={TranferImg} />
                            <p>Internal Transfer</p>
                        </Button>
                        <Button className ="btn-home m-4 btn-other" 
                        onClick= {() => moveToPayment('external', 'payment')}>
                            <img src={quick} />
                            <p>Quick Transfer 24/7</p>
                        </Button>
                        <Button className ="btn-home m-4 btn-other" 
                        onClick= {() => moveToPayment('external', 'payment')}>
                            <img src={bank} />
                            <p>External Transfer</p>
                        </Button>
                        <Button className ="btn-home m-4 btn-other" >
                            <img src = {Cash} />
                            <p>Cash transfer</p>
                        </Button>
                        <Button className ="btn-home m-4 btn-other" >
                            <img src ={transtatus} />
                            <p>Transaction Status</p>
                        </Button>
                        <Button className ="btn-home m-4 btn-other" >
                            <img src ={qr} />
                            <p>Transfer by QR code</p>
                        </Button>
                    </Row>
                </Col>
            </Row>
            </Col>
        </Row>
    )
}