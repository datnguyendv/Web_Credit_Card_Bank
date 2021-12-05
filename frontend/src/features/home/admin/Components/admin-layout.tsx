import React from 'react';
import { Button, Carousel, CarouselCaption, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
import '../../../css/App.css';
import '../../../css/auth.css';
import '../../../css/register.css';
import '../../../css/home.css';
import '../../../css/admin.css';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AdminLayout: React.FC = () => {
    const dispatch = useAppDispatch();


    const moveToPayment = (params: Layout, layout:string) => {
        dispatch(setPaymentLayout(params));
    }
    const movingLayout = (params: string) => {
    }

    return (
        <Row xs = "1" lg = "1" sm = "1" md = "1" xl ="1" xxl = "1" className = "display-flex admin-bg full-view animate__animated animate__fadeIn">
            <Col>
            <Row>
                <h2 className= "header-bank-font mx-3 mb-2 mt-2">IU BANK</h2>
            </Row>
            <Row md = "1" lg = "1" xs="1" className = 'display-flex transform-body overflow-auto'>
                <Col lg = "8" md="8" sm= "12" xs = "11" >
                    <Row className = "justify-content-center">
                        <h1 className ="text-center manager-text">MANAGEMENT</h1>
                    </Row>
                    <Row className="justify-content-center">
                        <Button className ="function-btn btn-home btn-grad-home m-4 border-0" 
                         onClick= {() => moveToPayment('internal', 'payment')}>
                            <img src={TranferImg} />
                            <p>Transaction history</p>
                        </Button>
                        <Button className ="function-btn btn-home btn-grad-home m-4 border-0" 
                        onClick = {() => movingLayout("addCard")}>
                            <FontAwesomeIcon icon = {['fas', 'credit-card']} />
                            <p>User Infomation</p>
                        </Button>
                        <Button className ="function-btn btn-home btn-grad-home m-4 border-0" 
                        onClick= {() => moveToPayment('external', 'payment')}>
                            <img src={quick} />
                            <p>Login History</p>
                        </Button>
                    </Row>
                </Col>
                <Col lg = "12" md="12" sm= "12" xs = "12" className = "px-3" >
                    <div className = "hastag">
                        <p>Manage</p>
                    </div>
                </Col>
                <Col lg = "8" md="8" sm= "12" xs = "11" >
                    <Row className="justify-content-center ">
                        <Button className ="btn-home m-4 btn-other" 
                        onClick= {() => moveToPayment('internal', 'payment')}>
                            <img src={TranferImg} />
                            <p>Transaction history</p>
                        </Button>
                        <Button className ="btn-home m-4 btn-other" 
                        onClick= {() => moveToPayment('external', 'payment')}>
                            <img src={quick} />
                            <p>card Information</p>
                        </Button>
                        <Button className ="btn-home m-4 btn-other" 
                        onClick= {() => moveToPayment('external', 'payment')}>
                            <img src={bank} />
                            <p>Banking system</p>
                        </Button>
                        <Button className ="btn-home m-4 btn-other" >
                            <img src = {Cash} />
                            <p>User Infomation</p>
                        </Button>
                        <Button className ="btn-home m-4 btn-other" >
                            <img src ={transtatus} />
                            <p>Login History</p>
                        </Button>
                        
                    </Row>
                </Col>
            </Row>
            </Col>
        </Row>
    )
}