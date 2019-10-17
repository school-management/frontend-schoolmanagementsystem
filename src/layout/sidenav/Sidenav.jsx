import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Heading2 from '../../components/typography/Heading2';
import Img from '../../assets/icons/fontawesome/book-read.svg';
import Navigator from '../../components/sidebar/Navigator';
import NavLink from '../../components/links/NavLink';
import NavBox from '../../components/sidebar/NavBox';
import SidenavCard from '../../components/cards/SidenavCard';

export default class Sidenav extends Component {
    render() {
        return (
            <Sidebar>
                <SidenavCard>
                    <img style={{ height: "44px", padding: "1.5em" }} src={Img}></img>
                </SidenavCard>


                <Navigator>
                    <NavBox default>
                        <NavLink href='/dashboard'>Dashboard</NavLink>
                    </NavBox>
                    <NavBox>
                        <NavLink href='/profile'>Profile</NavLink>
                    </NavBox>
                    <NavBox>
                        <NavLink href='/admission'>Admission</NavLink>
                    </NavBox>
                    <NavBox>
                        <NavLink href='/profile'>Ex.Curricular&nbsp;Activities</NavLink>
                    </NavBox>
                    <NavBox>
                        <NavLink href='/profile'>Leaving&nbsp;Certificate</NavLink>
                    </NavBox>
                    <NavBox>
                        <NavLink href='/profile'>Promotion</NavLink>
                    </NavBox>



                </Navigator>
            </Sidebar>
        )
    }
}
