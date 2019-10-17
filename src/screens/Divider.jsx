import React, { Component } from 'react'
import TinyDivider from '../components/divider/TinyDivider';
import MiddleDivider from '../components/divider/MiddleDivider';
import LargeDivider from '../components/divider/LargeDivider';

export default class divider extends Component {
    render() {
        return (
            <div>
                <TinyDivider></TinyDivider>
                <MiddleDivider></MiddleDivider>
                <LargeDivider></LargeDivider>
            </div>
        )
    }
}