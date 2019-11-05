import React, { Component } from 'react'
import Heading3 from '../../../components/typography/Heading3'
import Paragraph from '../../../components/typography/Paragraph'
import TableCom from '../../Table'
import Table1Show from '../../Table1'


export default class EditProfile extends Component {
    render() {
        return (
            <div>
                <Heading3>Edit Profile</Heading3>
                <Paragraph>Sample Content</Paragraph>
                <TableCom />
                {/* <Table1Show /> */}
            </div>
        )
    }
}