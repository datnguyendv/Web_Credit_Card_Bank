import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { AdminHome } from './admin/admin-home';
import { UserHome } from './user/user-home';
import { Layout } from '../Layout';
const Test: React.FC = () => {
  return (
      <Route>
        <Route path = "/admin" element = {<AdminHome/>}/>
        <Route path="/login" element={<Layout />} />
      </Route>
        
    );
  }
export default Test;