import React, { Component } from 'react'

import Input from '../components/inputs/Input';
import FlatInput from '../components/inputs/FlatInput';
import Heading1 from '../components/typography/Heading1';
import PasswordInput from '../components/inputs/PasswordInput';
import FlatPasswordInput from '../components/inputs/FlatPasswordInput';
import Select from '../components/inputs/Select';
import Option from '../components/inputs/Option';
import InputWithIcon from '../components/inputs/InputWithIcon';
import InputIcon from '../components/inputs/InputIcon';

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
                <br />
                <Select>
                    <Option value="">Select a Value</Option>
                    <Option value="A">A</Option>
                    <Option value="B">B</Option>
                </Select>
                {/* <InputIcon></InputIcon> */}

                {/* <InputWithIcon
                    name="field1"
                    type="text"
                    value=""
                    placeholder="Sample input"
                    onChange={this.onChange}
                ></InputWithIcon> */}



            </div >
        )
    }
}
