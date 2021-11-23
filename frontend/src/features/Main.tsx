import React from 'react';
// import { AuthScreen } from './auth/Main';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Login, Register } from './auth';
import { Counter } from './counter/Counter';

const Main: React.FC = () => {
    return (
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element = {<Register/>} />
              <Route path="/login" element={<Login />} />
              <Route path="counter" element = {<Counter/>}/>
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