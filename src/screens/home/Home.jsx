import React, { Component } from 'react';
import FlexContainer from '../../components/layout/FlexContainer';
import BasicCard from '../../components/cards/BasicCard';
import { Row, Col } from 'react-grid-system';
import HomeContainer from '../../components/containers/HomeContainer';
//images or icons
import Student from '../../assets/icons/fontawesome/user-graduate-solid.svg';


import HomeIcons from '../../components/icon/home/HomeIcons';
import Heading3 from '../../components/typography/Heading3';

import TopnavFlex from '../../layout/topnav/TopnavFlex';
import theme from '../../theme/theme';
import FooterFlex from '../../layout/footer/FooterFlex';

//hash router - this might work for deploy 
import { Link } from 'react-router-dom';

// importing my custom styled flex row and column to get responsive design
import { FlexedRow, FlexedCol } from './FlexedRow';


export default class Home extends Component {
    render() {
        return (
            <div style={{ background: theme.colors.base, marginBottom: "0.8em" }}>
                <TopnavFlex home />
                <HomeContainer>
                    <FlexedRow>

                        {/* Student */}
                        <FlexedCol>
                            <Link to="/student" style={{ textDecoration: "none" }}>
                                <BasicCard>
                                    <HomeIcons src="https://img.icons8.com/color/150/000000/student-male--v2.png" />
                                    <Heading3 style={{ textAlign: "center", textDecoration: "none" }}>Student</Heading3>
                                </BasicCard>
                            </Link>
                        </FlexedCol>

                        {/* Staff */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/conference-background-selected.png" />
                                <Heading3 style={{ textAlign: "center" }}>Staff</Heading3>
                            </BasicCard>
                        </FlexedCol>

                        {/* Attendance */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/attendance-mark.png" />
                                <Heading3 style={{ textAlign: "center" }}>Attendance</Heading3>
                            </BasicCard>
                        </FlexedCol>

                        {/* Examination */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/exam.png" />
                                <Heading3 style={{ textAlign: "center" }}>Examination</Heading3>
                            </BasicCard>
                        </FlexedCol>

                        {/* Library */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/book-shelf.png" />
                                <Heading3 style={{ textAlign: "center" }}>Library</Heading3>
                            </BasicCard>
                        </FlexedCol>


                        {/* Academic Calendar */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/cute-clipart/150/000000/calendar.png" />
                                <Heading3 style={{ textAlign: "center" }}>Academic Calendar</Heading3>
                            </BasicCard>
                        </FlexedCol>

                    </FlexedRow>

                    {/* next row starts from here ... so we shall start a new flex row here */}

                    <br />
                    <br />

                    <FlexedRow>

                        {/* Sports */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/sports-mode.png" />
                                <Heading3 style={{ textAlign: "center" }}>Sports</Heading3>
                            </BasicCard>
                        </FlexedCol>

                        {/* Time Table */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/cute-clipart/150/000000/timetable.png" />
                                <Heading3 style={{ textAlign: "center" }}>Time Table</Heading3>
                            </BasicCard>
                        </FlexedCol>

                        {/* Inventory */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/open-box.png" />
                                <Heading3 style={{ textAlign: "center" }}>Inventory</Heading3>
                            </BasicCard>
                        </FlexedCol>

                        {/* Clubs & Organizations */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/sales-channels.png" />
                                <Heading3 style={{ textAlign: "center" }}>Clubs&nbsp;&&nbsp;Organizations</Heading3>
                            </BasicCard>
                        </FlexedCol>

                        {/* Reports */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/flat_round/150/000000/statistic-file.png" />
                                <Heading3 style={{ textAlign: "center" }}>Reports</Heading3>
                            </BasicCard>
                        </FlexedCol>

                        {/* Alumni */}
                        <FlexedCol>
                            <BasicCard>
                                <HomeIcons src="https://img.icons8.com/color/150/000000/police-badge.png" />
                                <Heading3 style={{ textAlign: "center" }}>Alumni</Heading3>
                            </BasicCard>
                        </FlexedCol>
                    </FlexedRow>
                </HomeContainer>
                <FooterFlex />
            </div>
        )
    }
}
