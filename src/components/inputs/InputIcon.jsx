import React, { Component } from 'react';
import './InputIcon.css';
import Input from './Input';

export default class InputIcon extends Component {
    render() {
        return (
            <div className="inner-addon left-addon">
                <i className="fa fa-user glyphicon"></i>
                <Input type="text" class="form-control" placeholder="Username" />
            </div>
        )
    }
}
