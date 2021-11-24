import React from 'react';
// import { AuthScreen } from './auth/Main';
import { Route, Routes } from 'react-router-dom';
import { Login } from './auth';
import { RegisterLayout } from './auth/register/RegisterLayout';
import { Counter } from './counter/Counter';
import { AdminHome } from './home/admin/admin-home';
import { UserHome } from './home/user/user-home';
import { Layout } from './Layout';

const Main: React.FC = () => {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element = {<UserHome/>} />
          <Route path = "/admin" element = {<AdminHome/>}/>
          <Route path="/login" element={<Login />} />
          
          <Route path="counter" element = {<Counter/>}/>
        </Route>
        <Route path="/register" element={<RegisterLayout/>}/>
      </Routes>
    );
  }
export default Main;