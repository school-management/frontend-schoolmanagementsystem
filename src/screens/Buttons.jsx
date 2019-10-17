import React, { Component } from 'react';
import PrimaryButton from '../components/button/PrimaryButton';
import LargeButton from '../components/button/LargeButton';
import DoubleTickIconPrimary from '../components/icon/DoubleTickIconPrimary';
import DoubleTickIconSecondary from '../components/icon/DoubleTickIconSecondary';
import PrimaryIconOnlyButton from '../components/button/PrimaryIconOnlyButton';
import PlusIconPrimary from '../components/icon/PlusIconPrimary';
import PlusIconSecondary from '../components/icon/PlusIconSecondary';
import LargeIconOnlyButton from '../components/button/LargeIconOnlyButton';
import Heading1 from '../components/typography/Heading1';
import Paragraph from '../components/typography/Paragraph';

export default class Buttons extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Paragraph>Hi</Paragraph>
                <Paragraph>This is a Sample Content</Paragraph>
                {/* <Heading1>Buttons</Heading1>
                <PrimaryButton primary>Submit</PrimaryButton>
                <PrimaryButton secondary>Submit</PrimaryButton>
                <LargeButton primary>Submit</LargeButton>
                <LargeButton secondary>Submit</LargeButton>
                <br></br>
                <PrimaryButton primary><DoubleTickIconPrimary></DoubleTickIconPrimary>Submit</PrimaryButton>
                <PrimaryButton secondary><DoubleTickIconSecondary></DoubleTickIconSecondary>Submit</PrimaryButton>
                <LargeButton primary><DoubleTickIconPrimary></DoubleTickIconPrimary>Submit</LargeButton>
                <LargeButton secondary><DoubleTickIconSecondary />Submit</LargeButton>
                <br></br>
                <PrimaryIconOnlyButton primary><PlusIconPrimary /></PrimaryIconOnlyButton>
                <PrimaryIconOnlyButton secondary><PlusIconSecondary /></PrimaryIconOnlyButton>
                <LargeIconOnlyButton primary><PlusIconPrimary /></LargeIconOnlyButton>
                <LargeIconOnlyButton secondary><PlusIconSecondary /></LargeIconOnlyButton> */}
            </div>
        )
    }
}
