import React, {useEffect}  from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useAppDispatch } from '../../../app/hooks';
import { getAllCard } from '../manage/allCardSlice';
import { getAllLoginHis } from '../manage/loginHistorySlice';
import { getAllPaymentHis } from '../manage/paymentHistorySlice';
import { AdminLayout } from './Components/admin-layout';

export const AdminHome: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllLoginHis(""));
        dispatch(getAllPaymentHis(""));
        dispatch(getAllCard(""));

    }, [])
    return (
        <Container fluid className="container-center">
            <Row sm = "3">
            <Col sm="3" xs="12" lg="3"  className = "">
                {/* <Headers  /> */}
            </Col>
            <Col sm = "9" xs ="12" lg = "9" className = "user-home-func-background">
                <AdminLayout />
            </Col>
            </Row>
        </Container>
        
    )
}