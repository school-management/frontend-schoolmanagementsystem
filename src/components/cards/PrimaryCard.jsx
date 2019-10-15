import React, { Component } from 'react'

import Card from './Card'
import Heading3 from '../typography/Heading3'
import Paragraph from '../typography/Paragraph'

export default class PrimaryCard extends Component {
    render() {
        return (<div >
            <Card >
                <Heading3>Students</Heading3>
                <Paragraph>CHC student details here..... </Paragraph>
            </Card>

            <Card >
                <Heading3>Students</Heading3>
            </Card>

        </div>
        )
    }
}
