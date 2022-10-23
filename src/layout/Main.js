import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav/>
                    </Col>
                    <Col lg="7">
                        <Outlet/>
                    </Col>
                    <Col lg="3">
                        <RightSideNav/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;