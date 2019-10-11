import React, { Component } from 'react'

import Input from '../components/inputs/Input';
import FlatInput from '../components/inputs/FlatInput';
import Heading1 from '../components/typography/Heading1';
import PasswordInput from '../components/inputs/PasswordInput';
import FlatPasswordInput from '../components/inputs/FlatPasswordInput';

export default class Inputs extends Component {
    render() {
        return (
            <div>
                <Heading1>Inputs</Heading1>
                <Input placeholder="Username"></Input>
                <FlatInput placeholder="Username"></FlatInput>
                <br />
                <PasswordInput placeholder="Password"></PasswordInput>
                <FlatPasswordInput placeholder="Password"></FlatPasswordInput>
            </div>
        )
    }
}
