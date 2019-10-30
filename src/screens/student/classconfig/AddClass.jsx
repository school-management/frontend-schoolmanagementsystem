import React, { Component } from 'react';
import ClassFlex from "./ClassFlex";
import Heading3 from '../../../components/typography/Heading3';
import Selection from '../../../components/inputs/Select';
import Label from '../../../components/typography/Label';


export default class AddClass extends Component {
    render() {
        return (

            <flexContainer>
                <flexRow style={{ textAlign: "center" }}>
                    <flexCol style={{ textAlign: "center" }}>
                        <Heading3>Select grade</Heading3>
                        <div style={{ textAlign: "center" }}>
                            <Selection />
                        </div>
                    </flexCol>
                </flexRow>
                <flexRow>
                    <flexCol style={{ textAlign: "left" }}>
                        <div>A</div>
                        <Label></Label>
                    </flexCol>
                    <flexCol style={{ textAlign: "right" }}>
                        <div>B</div>
                    </flexCol>
                </flexRow>
            </flexContainer>
        )
    }
}
