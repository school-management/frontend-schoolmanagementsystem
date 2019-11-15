import React, { Component } from 'react'
import Heading6 from '../../../components/typography/Heading6'
import Card from '../../../components/cards/Card'
import { FlexBoxContainer, FlexBoxRow, FlexBoxColumn } from '../../../screens/student/admission/admissionFlexBox'
import Selection from '../../../components/inputs/Select'
import Input from '../../../components/inputs/Input'
import LargeIconOnlyButton from '../../../components/button/LargeIconOnlyButton'
import TableSmall from '../../TableSmall'

const cardStyle = {
    textAlign: "center",
    width: "50em",
    height: "30em",
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
    { value: '12', label: '12 Arts' },
    { value: '12', label: '12 Maths' },
    { value: '12', label: '12 Bio' },
]


export default class AddClass extends Component {

    state = {
        GradeStatus: false,
        DevisionStatus: false,
        TableStatus: false
    }

    handleGrade() {
        this.setState({ GradeStatus: true, DevisionStatus: true, TableStatus: true })
    }
    handleDivision() {
        this.setState({ DevisionStatus: true, GradeStatus: true, TableStatus: true })
    }
    handleTable() {
        this.setState({ TableStatus: true, GradeStatus: false, DevisionStatus: false })
    }

    render() {
        return (
            <FlexBoxContainer>
                <FlexBoxRow>
                    <FlexBoxColumn>
                        <Card>
                            <FlexBoxRow style={{ justifyContent: "center" }}>
                                <FlexBoxColumn>
                                    <Heading6>Select Grade</Heading6>
                                </FlexBoxColumn>
                            </FlexBoxRow>
                            <FlexBoxRow style={{ justifyContent: "space-between" }}>
                                <FlexBoxColumn>
                                </FlexBoxColumn>
                                <FlexBoxColumn>
                                    <Selection options={grades} placeholder="Grades" onChange={() => this.handleTable()} onChange={() => this.handleDivision()}></Selection>
                                </FlexBoxColumn>
                                <FlexBoxColumn>
                                </FlexBoxColumn>
                            </FlexBoxRow>
                            <br />
                            <FlexBoxRow style={{ justifyContent: "space-between" }}>
                                <FlexBoxColumn>
                                    <FlexBoxRow style={{ justifyContent: "center" }}>
                                    </FlexBoxRow>
                                    <FlexBoxRow>
                                        {this.state.TableStatus ? <FlexBoxColumn>
                                            <TableSmall />
                                        </FlexBoxColumn> : ""}
                                    </FlexBoxRow>
                                </FlexBoxColumn>
                                <FlexBoxColumn>
                                </FlexBoxColumn>
                                <FlexBoxColumn>
                                    <FlexBoxRow style={{ justifyContent: "center" }}>
                                        <FlexBoxColumn>
                                            <Heading6>Division</Heading6>
                                        </FlexBoxColumn>
                                    </FlexBoxRow>
                                    {this.state.DevisionStatus ?
                                        <FlexBoxColumn>
                                            <Input placeholder="Division"></Input>
                                        </FlexBoxColumn> : ""}
                                    {this.state.DevisionStatus ? <FlexBoxColumn>
                                        <LargeIconOnlyButton primary>+</LargeIconOnlyButton>
                                    </FlexBoxColumn> : ""}
                                </FlexBoxColumn>
                            </FlexBoxRow>
                        </Card>
                    </FlexBoxColumn>
                </FlexBoxRow>
            </FlexBoxContainer >
        )
    }
}