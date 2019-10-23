import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Heading2 from '../../components/typography/Heading2';
import Img from '../../assets/icons/fontawesome/book-read.svg';
import Navigator from '../../components/sidebar/Navigator';
import NavLink from '../../components/links/NavLink';
import NavBox from '../../components/sidebar/NavBox';
import SidenavCard from '../../components/cards/SidenavCard';
import NavBoxSub from '../../components/sidebar/NavBoxSub';
import NavLinkSub from '../../components/links/NavLinkSub';



export default class Sidenav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onToggle: false

        }
    }

    toggleDefault = (e, props) => {
        this.setState({
            onToggle: !this.state.onToggle
        })



    };

    render() {
        return (
            <Sidebar>
                <SidenavCard>
                    <img style={{ height: "44px", padding: "1.5em" }} src={Img}></img>
                </SidenavCard>


                <Navigator>
                    <NavBox isChecked={false} onClick={() => this.toggleDefault(this.props)}>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </NavBox>
                    <NavBox isChecked={false} onClick={() => this.toggleDefault(this.props)}>
                        <NavLink>Profile</NavLink>
                        {this.state.onToggle &&
                            <div>
                                <NavBoxSub>
                                    <NavLinkSub to="/profile/view">View</NavLinkSub>
                                </NavBoxSub>
                                <NavBoxSub>
                                    <NavLinkSub to="/profile/edit">Edit</NavLinkSub>
                                </NavBoxSub>
                            </div>}

                    </NavBox>
                    <NavBox isChecked={false} onClick={() => this.toggleDefault(this.props)}>
                        <NavLink to='/admission'>Admission</NavLink>
                    </NavBox>
                    <NavBox isChecked={false} onClick={() => this.toggleDefault(this.props)}>
                        <NavLink to='/profile'>Ex.Curricular&nbsp;Activities</NavLink>
                    </NavBox>
                    <NavBox isChecked={false} onClick={() => this.toggleDefault(this.props)}>
                        <NavLink to='/profile'>Leaving&nbsp;Certificate</NavLink>
                    </NavBox>
                    <NavBox isChecked={false} onClick={() => this.toggleDefault(this.props)}>
                        <NavLink to='/profile'>Promotion</NavLink>
                    </NavBox>



                </Navigator>
            </Sidebar>
        )
    }
}
