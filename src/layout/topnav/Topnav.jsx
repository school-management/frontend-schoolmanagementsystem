import React, { Component } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Heading5 from '../../components/typography/Heading5';
import Bell from '../../assets/icons/fontawesome/bell-regular.svg';
import { Row, Col } from 'react-grid-system';
import BellIcon from '../../components/icon/topbar/BellIcon';
import TinyDivider from '../../components/divider/TinyDivider';
import Envelope from '../../assets/icons/fontawesome/envelope-regular.svg';
import Avatar from '../../assets/img/avatar.jpg';

export default class Topnav extends Component {
    render() {
        return (
            <Topbar>
                <Row>
                    <Col md={5}><Heading5 style={{ marginLeft: "2.5em" }}>School Management System</Heading5></Col>
                    <Col md={2}></Col>
                    <Col md={2}></Col>
                    <TinyDivider />
                    <Col md={1}>
                        <BellIcon src={Bell}></BellIcon>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <BellIcon src={Envelope}></BellIcon>
                    </Col>
                    <TinyDivider />
                    <Col md={1}>
                        <BellIcon src={Avatar} style={{ height: "45px", marginTop: "0.3em", borderRadius: "3em" }}></BellIcon>
                    </Col>


                </Row>



            </Topbar>
        )
    }
}
