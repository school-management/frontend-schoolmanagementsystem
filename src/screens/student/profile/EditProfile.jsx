import React, { Component } from 'react'
import Heading3 from '../../../components/typography/Heading3'
import Paragraph from '../../../components/typography/Paragraph'
import TableCom from '../../Table'
import Table1Show from '../../Table1'
import { FlexBoxContainer, FlexBoxRow, FlexBoxColumn } from '../admission/admissionFlexBox'


export default class EditProfile extends Component {
    render() {
        return (
            <FlexBoxContainer>
                <FlexBoxRow>
                    <FlexBoxColumn>
                        <TableCom />
                    </FlexBoxColumn>
                </FlexBoxRow>
            </FlexBoxContainer>
        )
    }
}