import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardBody, Col, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, Row, UncontrolledDropdown } from 'reactstrap';
import { useAppDispatch } from '../../../../app/hooks';

import '../../../css/header.css';

export const Header: React.FC = () => {
    let dispatch = useAppDispatch();

    return (
        <Row className = "full-view">
            <Col md='2' xs ='12'  className ="">
                <Row className ='header-bg full-view'>

                    bar
                </Row>
            </Col>
            <Col md= '10' className=''>
                ddfasf
            </Col>
        </Row>
    )
}