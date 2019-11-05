import React, { Component } from 'react'
import Heading1 from '../components/typography/Heading1';
import Heading2 from '../components/typography/Heading2';
import Heading3 from '../components/typography/Heading3';
import Heading4 from '../components/typography/Heading4';
import Heading5 from '../components/typography/Heading5';
import Heading6 from '../components/typography/Heading6';
import Paragraph from '../components/typography/Paragraph';


export default class Typography extends Component {
    render() {
        return (
            <div>
                <Heading1>Heading 01</Heading1>
                <Heading2>Heading 02</Heading2>
                <Heading3>Heading 03</Heading3>
                <Heading4>Heading 04</Heading4>
                <Heading5>Heading 05</Heading5>
                <Heading6>Heading 06</Heading6>
                <Paragraph>Paragraph</Paragraph>
            </div>
        )
    }
}
