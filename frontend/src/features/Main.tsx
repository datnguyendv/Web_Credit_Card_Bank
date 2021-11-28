import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegisterLayout } from './auth/register/RegisterLayout';
import { Layout } from './Layout';
import { InternalPayment } from './payment/components';

const Main: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element = {<Layout/>}/> 
        <Route path="/register" element={<RegisterLayout/>}/>
        <Route path = "payment/internal" element = {<InternalPayment/>}/>
      </Routes>
    );
  }
export default Main;