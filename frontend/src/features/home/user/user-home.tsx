import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'reactstrap';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { decodeToken } from '../../auth/jwtProcess/decode-jwt';
import { selectLoginState } from '../../auth/login/loginSlice';
import { getCardInfo } from './cardInfoSlice';
import { getAccountInfo } from './userSlice';

export const UserHome: React.FC = () => {
    const token = useAppSelector(selectLoginState).token;
    const accountId:number = parseInt(decodeToken.getIdFromJwt(token));
    let navigate = useNavigate();
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAccountInfo(accountId));
        dispatch(getCardInfo(accountId));
    }, [])
    
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