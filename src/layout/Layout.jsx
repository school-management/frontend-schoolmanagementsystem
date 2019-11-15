import React, { Component } from 'react';
import Sidenav from './sidenav/Sidenav'
import Topnav from './topnav/Topnav';
// import { Container, Row, Col } from 'react-grid-system';
import { FlexContainer, FlexContainingColumn, FlexContainingRow } from '../components/layout/FlexContainer';
import FlexContent from '../components/layout/FlexContent';
import { Row } from 'react-grid-system';
import TopnavFlex from './topnav/TopnavFlex';
import LayoutContainer from '../components/containers/LayoutContainer';
import Content from './content/Content';
import Paragraph from '../components/typography/Paragraph';
import ContentContainer from './content/ContentContainer';
import { Footer } from '../components/footer/footer';
import FooterFlex from './footer/FooterFlex';
import FooterFlexContent from './footer/FooterFlexContent';
import TopnavContent from './topnav/TopNavContent';


export default class Layout extends Component {
    render() {
        return (
            <LayoutContainer>


                <FlexContainer>
                    <FlexContainingRow>

                        <Sidenav></Sidenav>

                        <FlexContainingColumn container>
                            <FlexContainingRow>
                                <TopnavContent />
                            </FlexContainingRow>
                            <FlexContainingRow>
                                <ContentContainer />
                            </FlexContainingRow>
                            <FlexContainingRow>
                                <FooterFlexContent />
                            </FlexContainingRow>
                        </FlexContainingColumn>
                    </FlexContainingRow>

                </FlexContainer>




            </LayoutContainer >

        )
    }
}
