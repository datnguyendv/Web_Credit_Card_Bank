import React, {useEffect}  from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { getAllCard } from '../manage/allCardSlice';
import { getAllLoginHis } from '../manage/loginHistorySlice';
import { getAllPaymentHis } from '../manage/paymentHistorySlice';

export const AdminHome: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllLoginHis(""));
        dispatch(getAllPaymentHis(""));
        dispatch(getAllCard(""));

    }, [])
    return (
        <h1>ADMIN HOME</h1>
    )
}