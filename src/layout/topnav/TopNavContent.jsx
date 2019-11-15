import React, { Component } from 'react';
import Topbar from '../../components/topbar/Topbar';
import Heading4 from '../../components/typography/Heading4';
//icons
import Bell from '../../assets/icons/fontawesome/bell-regular-white.svg';
import Envelope from '../../assets/icons/fontawesome/envelope-regular-white.svg';

import { Row, Col } from 'react-grid-system';
import BellIcon from '../../components/icon/topbar/BellIcon';
import TinyDivider from '../../components/divider/TinyDivider';
import Avatar from '../../assets/img/avatar.jpg';
import { TopbarFlex, FlexBasedDiv, IconLink } from '../../components/topbar/TopbarFlex';
import TopbarIconSection from '../../components/topbar/TopbarIconSection';
import School from '../../assets/img/stjohns.png';
import { TopbarFlexContent, FlexBasedDivContent } from '../../components/topbar/TopBarFlexContent';
import theme from '../../theme/theme';



export default class TopnavContent extends Component {
    render() {
        return (
            <TopbarFlexContent style={{ flexWrap: "wrap", background: theme.colors.sidebar }}>

                <FlexBasedDivContent layout></FlexBasedDivContent>
                <TinyDivider style={{ flexDirection: "column", marginBottom: "0.8em" }} />
                <div style={{ flexBasis: "1em" }}></div>
                <BellIcon content src={Bell} style={{ flexBasis: "2em", flexDirection: "column", marginBottom: "0.8em" }}></BellIcon>
                <div style={{ flexBasis: "1em" }}></div>
                <BellIcon content src={Envelope} style={{ flexBasis: "2em", flexBasis: "column", marginBottom: "0.8em" }} ></BellIcon>
                <div style={{ flexBasis: "1em" }}></div>
                <TinyDivider style={{ flexDirection: "column", marginBottom: "0.8em" }} />
                <div style={{ flexBasis: "1em" }}></div>

                <BellIcon src={Avatar} style={{ height: "45px", marginTop: "0.3em", borderRadius: "3em", alignItems: "center", flexDirection: "column" }}></BellIcon>
                <div style={{ flexBasis: "1em" }}></div>
            </TopbarFlexContent >
        )
    }
}
