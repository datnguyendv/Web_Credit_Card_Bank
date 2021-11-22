import React from 'react'
// import { AuthScreen } from './auth/Main';
import { Outlet, BrowserRouter, Route, Routes, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { Login, Register } from './auth';

const Main: React.FC = () => {
    return (
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element = {<Register/>} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
      );
    }
    
    function Layout() {
      return (
        <div>
          {/* <AuthStatus /> */}
          <Outlet />
        </div>
      );
    }
    

export default Main;