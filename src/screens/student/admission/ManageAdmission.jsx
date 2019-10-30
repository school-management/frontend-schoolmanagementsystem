import React, { Component } from 'react'
import Heading3 from '../../../components/typography/Heading3'
import Paragraph from '../../../components/typography/Paragraph'
import Card from '../../../components/cards/Card'
import { FlexBoxContainer, FlexBoxRow, FlexBoxColumn } from './admissionFlexBox'
import PrimaryButton from '../../../components/button/PrimaryButton'
import TogglerButton from '../../../components/button/TogglerButton'
import Selection from '../../../components/inputs/Select'
import Label from '../../../components/typography/Label'
import FlatInput from '../../../components/inputs/FlatInput'
import FloatingLabelInput from '../../../components/inputs/FloatingLabelInput'
import Input from '../../../components/inputs/Input'
import LargeIconOnlyButton from '../../../components/button/LargeIconOnlyButton'
import PlusIconPrimary from '../../../components/icon/PlusIconPrimary'
import SearchIconPrimary from '../../../components/icon/SearchIconPrimary'

const cardStyle = {
    textAlign: "center",
    width: "25em",

    
}

const grades = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
  ]

  const divisions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' }
  ]
  
export default class ManageAdmission extends Component {

    handleDivision() {
       return(
          <h1>gsj</h1>
       )
    }

    handleAdmission() {
        return(
            <div>how</div>
        )
    }

    handleName() {
        return(
            <h1>sdfbsf</h1>
        )
    }

    render() {
        return (
            <FlexBoxContainer>
                <FlexBoxRow>
                    <FlexBoxColumn>
                    <Card style={cardStyle}>
                        <FlexBoxRow>
                            <FlexBoxColumn>
                            <Heading3> Search A Student</Heading3>
                            </FlexBoxColumn>
                        </FlexBoxRow>
                        <FlexBoxRow style={{justifyContent: "space-between"}}>
                            <FlexBoxColumn>
                                <TogglerButton onClick={() => this.handleDivision()}>By Division</TogglerButton>
                            </FlexBoxColumn>
                            <FlexBoxColumn>
                                <TogglerButton onClick={() => this.handleAdmission()}>By Admission No</TogglerButton>
                            </FlexBoxColumn>
                            <FlexBoxColumn>
                                <TogglerButton onClick={() => this.handleName()}>By Name</TogglerButton>
                            </FlexBoxColumn>
                        </FlexBoxRow>
                        <br/>
                        <FlexBoxRow style={{justifyContent: "space-between"}}>
                            <FlexBoxColumn>
                                <Selection options={grades} placeholder="Grades"></Selection>
                            </FlexBoxColumn>
                            <FlexBoxColumn>
                                <Selection options={divisions} placeholder="Divisions"></Selection>
                            </FlexBoxColumn>
                        </FlexBoxRow>
                        <br/>
                        <FlexBoxRow style={{justifyContent: "space-between"}}>
                            <FlexBoxColumn>
                             <Input placeholder="Enter A Name"></Input>
                            </FlexBoxColumn>
                            <FlexBoxColumn>
                            <LargeIconOnlyButton primary><SearchIconPrimary/></LargeIconOnlyButton>
                            </FlexBoxColumn>
                        </FlexBoxRow>
                        <br/>
                        <FlexBoxRow style={{justifyContent: "space-between"}}>
                            <FlexBoxColumn>
                                <Input placeholder="Enter A Admission No"></Input>
                            </FlexBoxColumn>
                            <FlexBoxColumn style={{ justifyContent: "center"}}>
                            <LargeIconOnlyButton primary><SearchIconPrimary/></LargeIconOnlyButton>
                            </FlexBoxColumn>

                        </FlexBoxRow>
                        
                    </Card>
                    </FlexBoxColumn>
                </FlexBoxRow>
            </FlexBoxContainer>
        )
    }
}
