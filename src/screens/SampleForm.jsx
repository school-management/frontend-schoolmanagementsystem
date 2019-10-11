import React, { Component } from 'react'
import Form from '../components/form/Form';
import Heading3 from '../components/typography/Heading3';
import FlatInput from '../components/inputs/FlatInput';
import { Container, Row, Col } from 'react-grid-system';
import Label from '../components/typography/Label';
import FlatPasswordInput from '../components/inputs/FlatPasswordInput';
import PrimaryButton from '../components/button/PrimaryButton';
import theme from '../theme/theme';

export default class SampleForm extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <div>
                                <Form action="#">
                                    <Heading3>Login</Heading3>
                                    <br />
                                    <Label for="username">Username</Label>
                                    <FlatInput name="username" placeholder="Username"></FlatInput>
                                    <br />
                                    <Label for="password">Password</Label>
                                    <FlatPasswordInput name="password" placeholder="Username"></FlatPasswordInput>
                                    <br />
                                    <PrimaryButton primary>Login</PrimaryButton>
                                </Form>
                            </div>
                        </Col>
                        <Col md={2}></Col>

                    </Row>
                </Container>
            </div>
        )
    }
}
