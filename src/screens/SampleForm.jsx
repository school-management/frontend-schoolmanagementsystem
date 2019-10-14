import React, { Component } from 'react'
import Form from '../components/form/Form';
import Heading2 from '../components/typography/Heading2';
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
                                    <Heading2>Login</Heading2>
                                    <br />
                                    <Label for="username">  </Label>
                                    <FlatInput name="username" placeholder="Username"></FlatInput>
                                    <br />
                                    <Label for="password"></Label>
                                    <FlatPasswordInput name="password" placeholder="Password"></FlatPasswordInput>
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
