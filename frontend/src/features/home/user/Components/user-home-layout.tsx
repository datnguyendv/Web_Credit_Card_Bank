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


export const UserHomeLayout: React.FC = () => {
    return (
        <Row xs = "1" lg = "1" sm = "1" md = "1" xl ="1" xxl = "1" className = "display-flex full-view animate__animated animate__fadeIn">
            <Col>
            <Row>
                <h2 className= "header-bank-font">IU BANK</h2>
            </Row>
            <Row md = "1" lg = "1" xs="1" className = 'display-flex transform-body'>
                <Col lg = "8" md="8" sm= "12" xs = "11" >
                    <Row>
                        <div className= "box">
                        </div>
                    </Row>
                    <Row className="justify-content-center">
                        <Button className ="function-btn btn btn-grad-home m-4" >
                            <img src={TranferImg} />
                            <p>Internal Transfer</p>
                        </Button>
                        <Button className ="function-btn btn btn-grad-home m-4" >
                            <img src={dimond} />
                            <p>IUB Rewards</p>
                        </Button>
                        <Button className ="function-btn btn btn-grad-home m-4" >
                            <img src={quick} />
                            <p>Quick Transfer 24/7</p>
                        </Button>
                        <Button className ="function-btn btn btn-grad-home m-4" >
                            <img src={bank} />
                            <p>External Transfer</p>
                        </Button>
                        <Button className ="function-btn btn btn-grad-home m-4" >
                            <img src={saveMoney} />
                            <p>Open savings account</p>
                        </Button>
                    </Row>
                </Col>
                <Col lg = "12" md="12" sm= "12" xs = "11" className = "p-0" >
                    <div className = "hastag">
                        <p>Transfer</p>
                    </div>
                </Col>
                <Col lg = "8" md="8" sm= "12" xs = "11" >
                    <Row className="justify-content-center">
                        <Button className ="btn m-4 btn-other" >
                            <img src={TranferImg} />
                            <p>Internal Transfer</p>
                        </Button>
                        <Button className ="btn m-4 btn-other" >
                            <img src={quick} />
                            <p>Quick Transfer 24/7</p>
                        </Button>
                        <Button className ="btn m-4 btn-other" >
                            <img src={bank} />
                            <p>External Transfer</p>
                        </Button>
                        <Button className ="btn m-4 btn-other" >
                            <img src = {Cash} />
                            <p>Cash transfer</p>
                        </Button>
                        <Button className ="btn m-4 btn-other" >
                            <img src ={transtatus} />
                            <p>Transaction Status</p>
                        </Button>
                        <Button className ="btn m-4 btn-other" >
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