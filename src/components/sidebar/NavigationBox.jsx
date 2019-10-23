import React, { Component } from 'react'
import NavBox from './NavBox'
import NavLink from '../links/NavLink'


export default class NavigationBox extends Component {
    render() {
        return (
            <NavBox>
                <NavLink>{this.props.children}</NavLink>
            </NavBox>
        )
    }
}
