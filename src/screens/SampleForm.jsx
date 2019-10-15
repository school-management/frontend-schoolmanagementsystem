import React, { Component } from 'react'
import Form from '../components/form/Form';
import Heading3 from '../components/typography/Heading3';
import FlatInput from '../components/inputs/FlatInput';
import { Row, Col } from 'react-grid-system';
import Label from '../components/typography/Label';
import FlatPasswordInput from '../components/inputs/FlatPasswordInput';
import PrimaryButton from '../components/button/PrimaryButton';
import theme from '../theme/theme';
import Container from '../components/containers/LoginFormContainer';
import LoginFormContainer from '../components/containers/LoginFormContainer';
import Heading2 from '../components/typography/Heading2';

export default class SampleForm extends Component {
    render() {
        return (
            <LoginFormContainer>
                <Form action="#">
                    <Heading2>Login</Heading2>
                    <br />

                    <FlatInput name="username" placeholder="Username">{this.props.children}</FlatInput>
                    <br />

                    <FlatPasswordInput name="password" placeholder="Password"></FlatPasswordInput>
                    <br />
                    <PrimaryButton primary>Login</PrimaryButton>
                </Form>
            </LoginFormContainer>
        )
    }
}
