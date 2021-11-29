import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegisterLayout } from './auth/register/RegisterLayout';
import { Layout } from './Layout';
import { PaymentLayout } from './payment/paymentLayout';

const Main: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element = {<Layout/>}/> 
        <Route path="/register" element={<RegisterLayout/>}/>
        <Route path = "/payment" element = {<PaymentLayout />}/>
      </Routes>
    );
  }
export default Main;