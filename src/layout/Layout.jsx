import React, { Component } from 'react';
import Sidenav from './sidenav/Sidenav'
import Topnav from './topnav/Topnav';
// import { Container, Row, Col } from 'react-grid-system';
import FlexContainer from '../components/layout/FlexContainer';

export default class Layout extends Component {
    render() {
        return (
            <FlexContainer>
                <Sidenav />
                <Topnav />
            </FlexContainer >
            // <div>
            //     <Sidenav />
            //     <Topnav />
            // </div>

        )
    }
}
