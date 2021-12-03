import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgotPassLayout from './auth/forgot-pass/forgotPassLayout';
import { Layout } from './Layout';
import { PaymentLayout } from './payment/paymentLayout';
import 'animate.css';
import { LoadingScreen } from './waiting/loading-screen';

const Main: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element = {<Layout/>}/> 
      <Route path="/resetpass" element = {<ForgotPassLayout/>}/>
      <Route path = "/payment" element = {<PaymentLayout />}/>
      <Route path ="/wat" element = {<LoadingScreen/>}/>
    </Routes>
  );
}

library.add(fab, far, fas);
export default Main;