
import React from 'react';
import { useAppSelector } from '../app/hooks';
import { Login } from './auth';
import { loginState } from './auth/login/login-dto';
import { selectLoginState } from './auth/login/loginSlice';
import { AdminHome } from './home/admin/admin-home';
import {  UserHome } from './home/user/user-home';
import { LoadingScreen } from './waiting/loading-screen';

export const RenderAuthen: React.FC<loginState> = ({token, status, errMsg, type}) => {
    if(status === 'isLoading') {
        return (
            <LoadingScreen/>
        )
    } else if (status === 'idle' && token === '') {
        return (
            <Login/>
        )
    } else if (status === 'idle' && token !== '') {
        if(type === 'User') {
            return (
                <UserHome/>
            )
        } else 
            return(
                <AdminHome/>
            )
    } else 
        return (
            <Login />
        )

}
export const Layout: React.FC = () => {
    let authenStatus: loginState = useAppSelector(selectLoginState);

    return (
        <div>
            <RenderAuthen token = {authenStatus.token} status = {authenStatus.status} errMsg = {authenStatus.errMsg} type = {authenStatus.type} />
        </div>
    )
}