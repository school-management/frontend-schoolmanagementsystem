import React, { Component } from 'react';
import FlexContainer from '../components/layout/FlexContainer';
import BasicCard from '../components/cards/BasicCard';
import { Row, Col } from 'react-grid-system';
import HomeContainer from '../components/containers/HomeContainer';
//images or icons
import Student from '../assets/icons/fontawesome/user-graduate-solid.svg';


import HomeIcons from '../components/icon/home/HomeIcons';
import Heading3 from '../components/typography/Heading3';
import Topnav from '../layout/topnav/Topnav';
import TopnavFlex from '../layout/topnav/TopnavFlex';
import theme from '../theme/theme';
import Footer from '../components/footer/footer';
import FooterFlex from '../layout/footer/FooterFlex';

import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div style={{ background: theme.colors.base, marginBottom: "0.8em" }}>
                <TopnavFlex home />
                <HomeContainer>
                    <Row>
                        <Col md={2}>
                            <Link to="/student" style={{ textDecoration: "none" }}>
                                <BasicCard>
                                    <HomeIcons src="https://img.icons8.com/color/150/000000/student-male--v2.png" />
                                    <Heading3 style={{ textAlign: "center", textDecoration: "none" }}>Student</Heading3>
                                </BasicCard>
                            </Link>
                        </Col>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/conference-background-selected.png" />
                                <Heading3 style={{ textAlign: "center" }}>Staff</Heading3>
                            </BasicCard>
                        </Col>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/attendance-mark.png" />
                                <Heading3 style={{ textAlign: "center" }}>Attendance</Heading3>
                            </BasicCard>
                        </Col>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/exam.png" />
                                <Heading3 style={{ textAlign: "center" }}>Examination</Heading3>
                            </BasicCard>
                        </Col>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/book-shelf.png" />
                                <Heading3 style={{ textAlign: "center" }}>Library</Heading3>
                            </BasicCard>
                        </Col>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/cute-clipart/150/000000/calendar.png" />
                                <Heading3 style={{ textAlign: "center" }}>Academic Calendar</Heading3>
                            </BasicCard>
                        </Col>

                    </Row>

                    <br />
                    <br />
                    <Row>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/sports-mode.png" />
                                <Heading3 style={{ textAlign: "center" }}>Sports</Heading3>
                            </BasicCard>
                        </Col>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/cute-clipart/150/000000/timetable.png" />
                                <Heading3 style={{ textAlign: "center" }}>Time Table</Heading3>
                            </BasicCard>
                        </Col>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/open-box.png" />
                                <Heading3 style={{ textAlign: "center" }}>Inventory</Heading3>
                            </BasicCard>
                        </Col>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/sales-channels.png" />
                                <Heading3 style={{ textAlign: "center" }}>Clubs&nbsp;&&nbsp;Organizations</Heading3>
                            </BasicCard>
                        </Col>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/flat_round/150/000000/statistic-file.png" />
                                <Heading3 style={{ textAlign: "center" }}>Reports</Heading3>
                            </BasicCard>
                        </Col>
                        <Col md={2}>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/police-badge.png" />
                                <Heading3 style={{ textAlign: "center" }}>Alumni</Heading3>
                            </BasicCard>
                        </Col>

                    </Row>
                </HomeContainer>
                <FooterFlex />
            </div>
        )
    }
}
