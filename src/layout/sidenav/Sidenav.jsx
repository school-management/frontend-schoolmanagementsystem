import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Heading2 from '../../components/typography/Heading2';
import Img from '../../assets/img/stjohns.png';
import Navigator from '../../components/sidebar/Navigator';
import NavLink from '../../components/links/NavLink';
import NavBox from '../../components/sidebar/NavBox';
import SidenavCard from '../../components/cards/SidenavCard';
import NavBoxSub from '../../components/sidebar/NavBoxSub';
import NavLinkSub from '../../components/links/NavLinkSub';
import styled, { css } from 'styled-components';
import theme from '../../theme/theme';
import Nav from '../../components/links/Nav';


export default class Sidenav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onProfileToggle: false,
            onAdmissionToggle: false,
            onExCurricularToggle: false,
            onLeavingCertificateToggle: false,
            onPromotionToggle: false,
            isChecked: false
        }
    }

    //profile toggling 
    expandProfileMenu = (e, props) => {
        if (!this.state.onProfileToggle) {
            this.setState({
                onProfileToggle: true,
                onAdmissionToggle: false,
                onExCurricularToggle: false,
                onLeavingCertificateToggle: false,
                onPromotionToggle: false,
                isChecked: true
            })
        }
        if (this.state.onProfileToggle) {
            this.setState({
                onProfileToggle: false,
                onAdmissionToggle: false,
                onExCurricularToggle: false,
                onLeavingCertificateToggle: false,
                onPromotionToggle: false,
                isChecked: true
            })
        }


    };

    //admission toggling
    expandAdmissionMenu = (e, props) => {

        if (!this.state.onAdmissionToggle) {
            this.setState({
                onProfileToggle: false,
                onAdmissionToggle: true,
                onExCurricularToggle: false,
                onLeavingCertificateToggle: false,
                onPromotionToggle: false,
                isChecked: true
            })
        }

        if (this.state.onAdmissionToggle) {
            this.setState({
                onProfileToggle: false,
                onAdmissionToggle: false,
                onExCurricularToggle: false,
                onLeavingCertificateToggle: false,
                onPromotionToggle: false,
                isChecked: false
            })
        }
    };

    //extra curricular toggle
    expandExCurricularMenu = (e, props) => {

        if (!this.state.onExCurricularToggle) {
            this.setState({
                onProfileToggle: false,
                onAdmissionToggle: false,
                onExCurricularToggle: true,
                onLeavingCertificateToggle: false,
                onPromotionToggle: false,
                isChecked: true
            })
        }
        if (this.state.onExCurricularToggle) {
            this.setState({
                onProfileToggle: false,
                onAdmissionToggle: false,
                onExCurricularToggle: false,
                onLeavingCertificateToggle: false,
                onPromotionToggle: false,
                isChecked: false
            })
        }
    };

    //leaving certificate toggle
    expandLeavingCertificateMenu = (e, props) => {

        if (!this.state.onLeavingCertificateToggle) {
            this.setState({
                onProfileToggle: false,
                onAdmissionToggle: false,
                onExCurricularToggle: false,
                onLeavingCertificateToggle: true,
                onPromotionToggle: false,
                isChecked: true
            })
        }
        if (this.state.onLeavingCertificateToggle) {
            this.setState({
                onProfileToggle: false,
                onAdmissionToggle: false,
                onExCurricularToggle: false,
                onLeavingCertificateToggle: false,
                onPromotionToggle: false,
                isChecked: false
            })
        }
    };


    collapseProfileMenu = () => {
        if (!this.state.onProfileToggle) {
            this.setState({
                onProfileToggle: false,
                onAdmissionToggle: false,
                isChecked: true
            })
        }

    }

    activateTab = (e, props) => {
        this.setState({
            isChecked: true,
        })
    };




    render() {
        return (
            <Sidebar>
                <SidenavCard>
                    <img style={{ height: "99px", padding: "0.8em" }} src={Img}></img>
                </SidenavCard>


                <Navigator>
                    <NavBox isChecked={this.state.isChecked} onClick={(e) => this.activateTab(e)}>
                        <NavLink to='/student/dashboard'>Dashboard</NavLink>
                    </NavBox>
                    <NavBox isChecked={this.state.isChecked} onClick={(e) => this.expandProfileMenu(e)} >
                        <NavLink>Profile</NavLink>
                        {this.state.onProfileToggle &&
                            <div>
                                <Nav to="/student/profile/view">
                                    <NavBoxSub>
                                        <NavLinkSub to="/student/profile/view">View</NavLinkSub>
                                    </NavBoxSub>
                                </Nav>
                                <Nav to="/student/profile/edit">
                                    <NavBoxSub>
                                        <NavLinkSub to="/student/profile/edit">Edit</NavLinkSub>
                                    </NavBoxSub>
                                </Nav>
                            </div>}

                    </NavBox>
                    <NavBox isChecked onClick={() => this.expandAdmissionMenu(this.props)}>
                        <NavLink>Admission</NavLink>
                        {this.state.onAdmissionToggle &&
                            <div>
                                <Nav to="/student/admission/new">
                                    <NavBoxSub>
                                        <NavLinkSub to="/student/admission/new">New</NavLinkSub>
                                    </NavBoxSub>
                                </Nav>
                                <Nav to="/student/admission/manage">
                                    <NavBoxSub>
                                        <NavLinkSub to="/student/admission/manage">Edit</NavLinkSub>
                                    </NavBoxSub>
                                </Nav>
                            </div>}
                    </NavBox>
                    <NavBox isChecked={false} onClick={() => this.expandExCurricularMenu(this.props)}>
                        <NavLink>Ex.Curricular&nbsp;Activities</NavLink>
                        {this.state.onExCurricularToggle &&
                            <div>
                                <Nav to="/student/excurricular/add">
                                    <NavBoxSub>
                                        <NavLinkSub to="/student/excurricular/add">Add</NavLinkSub>
                                    </NavBoxSub>
                                </Nav>
                                <Nav to="/student/excurricular/edit">
                                    <NavBoxSub>
                                        <NavLinkSub to="/student/excurricular/add">Edit</NavLinkSub>
                                    </NavBoxSub>
                                </Nav>
                            </div>}
                    </NavBox>
                    <NavBox isChecked={false} onClick={() => this.expandLeavingCertificateMenu(this.props)}>
                        <NavLink>Leaving&nbsp;Certificate</NavLink>
                        {this.state.onLeavingCertificateToggle &&
                            <div>
                                <Nav to="/student/leavingcertificate/add">
                                    <NavBoxSub>
                                        <NavLinkSub to="/student/excurricular/add">New</NavLinkSub>
                                    </NavBoxSub>
                                </Nav>
                                <Nav to="/student/excurricular/edit">
                                    <NavBoxSub>
                                        <NavLinkSub to="/student/excurricular/edit">Edit</NavLinkSub>
                                    </NavBoxSub>
                                </Nav>
                            </div>}
                    </NavBox>
                    <NavBox isChecked={false}>
                        <Nav to="/student/classconfig"  >
                            <NavLink to="/student/classconfig">Class Configuration</NavLink>
                        </Nav>
                    </NavBox>
                    <NavBox isChecked={false}>
                        <Nav to="/student/classallocation">
                            <NavLink to="/student/classallocation">Classroom Allocation</NavLink>
                        </Nav>
                    </NavBox>
                    <NavBox isChecked={false}>
                        <Nav to="/student/promotion">
                            <NavLink to="/student/promotion">Promotion</NavLink>
                        </Nav>
                    </NavBox>


                </Navigator>
            </Sidebar >
        )
    }
}
