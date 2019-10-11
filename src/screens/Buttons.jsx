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

export default class Buttons extends Component {
    render() {
        return (
            <div>
                <Heading1>Buttons</Heading1>
                <br></br>
                <PrimaryButton primary>Submit</PrimaryButton>
                <PrimaryButton secondary>Submit</PrimaryButton>
                <br></br>
                <LargeButton primary>Submit</LargeButton>
                <LargeButton secondary>Submit</LargeButton>
                <br></br>
                <PrimaryButton primary><DoubleTickIconPrimary></DoubleTickIconPrimary>Submit</PrimaryButton>
                <PrimaryButton secondary><DoubleTickIconSecondary></DoubleTickIconSecondary>Submit</PrimaryButton>
                <br></br>
                <LargeButton primary><DoubleTickIconPrimary></DoubleTickIconPrimary>Submit</LargeButton>
                <LargeButton secondary><DoubleTickIconSecondary />Submit</LargeButton>
                <br></br>
                <PrimaryIconOnlyButton primary><PlusIconPrimary /></PrimaryIconOnlyButton>
                <PrimaryIconOnlyButton secondary><PlusIconSecondary /></PrimaryIconOnlyButton>
                <br></br>
                <LargeIconOnlyButton primary><PlusIconPrimary /></LargeIconOnlyButton>
                <LargeIconOnlyButton secondary><PlusIconSecondary /></LargeIconOnlyButton>
            </div>
        )
    }
}
