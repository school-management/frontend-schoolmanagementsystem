import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Heading2 from '../../components/typography/Heading2'

export default class Sidenav extends Component {
    render() {
        return (
            <Sidebar>
                <i className="fa fa-book"></i>
                <nav>
                    <a href>Students</a>
                </nav>
            </Sidebar>
        )
    }
}
