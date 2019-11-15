import React, { Component } from 'react'
import { Footer, FooterFlexDiv } from '../../components/footer/footer'
import Paragraph from '../../components/typography/Paragraph'
import { FooterContent, FooterFlexContentDiv } from '../../components/footer/footerContent'

export default class FooterFlexContent extends Component {
    render() {
        return (
            <FooterContent>
                <Paragraph footer> &copy;Copyrighted 2019 to Invicta Innovations</Paragraph>
                <FooterFlexContentDiv></FooterFlexContentDiv>
                <Paragraph footer>Terms</Paragraph>
                <div style={{ flexBasis: "1em" }}></div>
                <Paragraph footer>Privacy Policy</Paragraph>
            </FooterContent>
        )
    }
}
