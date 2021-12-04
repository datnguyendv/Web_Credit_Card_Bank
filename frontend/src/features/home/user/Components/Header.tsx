import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { useAppDispatch } from '../../../../app/hooks';

export const Header: React.FC = () => {
    let dispatch = useAppDispatch();

    return (
            <Row className = "bg-primary">
                <Col>
                </Col>
                <p> header</p>
                <Col>
                </Col>
            </Row>
    )
}