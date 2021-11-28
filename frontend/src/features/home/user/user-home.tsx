import React  from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router';
import { Button } from 'reactstrap';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { InternalPayment } from '../../payment/components';
import { selectUserHomeState, setUserInfo } from './userSlice';

export const UserHome: React.FC = () => {
    let navigate = useNavigate();
    return (
        <div>
            <Button
             onClick = {() => navigate('/payment/internal', {replace: true})
             }>
                click
            </Button>

        </div>
    )
}