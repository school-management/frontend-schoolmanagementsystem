import React, { Component } from 'react'
import Layout from '../../../../layout/Layout'
import Heading3 from '../../../../components/typography/Heading3'
import { Container, Row, Col } from 'react-grid-system'
import Select from 'react-select'
//toggler
import Switch from "react-switch";


import Input from '../../../../components/inputs/Input';
import Label from '../../../../components/typography/Label';
import FormContainer from '../../../../components/containers/FormContainer';
import FlatInput from '../../../../components/inputs/FlatInput';
import { FormColumn, FormRow, FormWrapper } from '../../../../components/containers/FormColumn';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import Selection from '../../../../components/inputs/Select'
import { connect } from 'react-redux';
import Steps from '../../../../assets/img/steps.png';
import Card from '../../../../components/cards/Card'
import theme from '../../../../theme/theme'
import CardHeader from './cardHeader'
import { Dropdown, Option } from '../../../../components/inputs/Dropdown'
import { Wrapper, Item, RadioButton, RadioButtonLabel } from '../../../../components/inputs/Radio'
import Paragraph from '../../../../components/typography/Paragraph'
import Heading5 from '../../../../components/typography/Heading5'
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from '../../../../components/inputs/Toggler'

// const isOldStudent = [
//     { value: 'True', label: 'Yes' },
//     { value: 'False', label: 'No' }
// ]

const isOldStudent = [
    { value: "true", label: 'Yes' },
    { value: "false", label: 'No' }
]

class ParentForm extends Component {

    state = {
        parentId: "",
        fatherName: "",
        fatherOccupation: "",
        fatherOfficialAddress: "",
        fatherMobile: "",
        fatherEmail: "",
        IfFatherOldStudent: "",
        IfFatherOldStudentstatus: "",
        fatherFrom: "",
        fatherTo: "",
        motherName: "",
        motherOccupation: "",
        motherOfficialAddress: "",
        motherMobile: "",
        motherEmail: "",
        IfMotherOldStudent: "",
        motherMaidenName: "",
        motherFrom: "",
        motherTo: "",
        guardian: false,
        guardianName: "",
        guardianOccupation: "",
        guardianOfficialAddress: "",
        guardianMobile: "",
        guardianEmail: "",
        sibilingAdmissionNo: "",
        sibilingFullName: "",
        sibilingGrade: "",

    }

    doChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state.fatherName)

    }

    handleSelectChange = event => {
        this.setState({
            IfFatherOldStudent: event.target.value,
        })
        console.log(this.state.IfFatherOldStudent);
    }
    handleSelectChange1 = event => {
        this.setState({
            IfMotherOldStudent: event.target.value
        })
        console.log(this.state.IfMotherOldStudent);
    }
    handleSelectChange2 = event => {
        this.setState({
            guardian: event.target.value
        })
        console.log(this.state.guardian);
    }





    handleSelect(e) {

        this.setState({
            IfFatherOldStudent: e.target.value

        })
        console.log(e.target.value);

    }

    render() {
        console.log(this.state.IfFatherOldStudent)
        return (
            <FormContainer>
                {/* <FormRow>

                </FormRow> */}
                <FormRow>
                    <FormColumn style={{ marginRight: "1em", justifyContent: "space-between" }}>
                        <Card>
                            <FormRow>
                                <CardHeader>
                                    <div style={{ paddingRight: "0.1em" }}> 1 - Father's Details</div>
                                </CardHeader>
                            </FormRow>
                            <FormRow>
                                <FormColumn>
                                    <Label>Father NIC No</Label>
                                    <FlatInput placeholder="Father NIC No" type="text"
                                        name="parentId"
                                        id="parentId"
                                        value={this.state.parentId}
                                        onChange={e => this.doChange(e)} ></FlatInput>

                                </FormColumn>
                                <FormColumn>
                                    <Label>Father's Name</Label>
                                    <FlatInput placeholder="Enter your Father Name" type="text"
                                        name="fatherName"
                                        id="fatherName"
                                        value={this.state.fatherName}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                            </FormRow>
                            <FormRow>
                                <FormColumn>
                                    <Label>Father's Occupation :</Label>
                                    <FlatInput placeholder="Father's Occupation " type="text"
                                        name="fatherOccupation"
                                        id="fatherOccupation"
                                        value={this.state.fatherOccupation}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                                <FormColumn>
                                    <Label>Father's Office Address :</Label>
                                    <FlatInput placeholder="Father's Office Address" type="text"
                                        name="fatherOfficialAddress"
                                        id="fatherOfficialAddress"
                                        value={this.state.fatherOfficialAddress}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                            </FormRow>

                            <FormRow>
                                <FormColumn>
                                    <Label>Father's Moblie No:</Label>
                                    <FlatInput placeholder="Father's Moblie No" type="text"
                                        name="fatherMobile"
                                        id="fatherMobile"
                                        value={this.state.fatherMobile}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                                <FormColumn>
                                    <Label>Father's Email:</Label>
                                    <FlatInput placeholder="Father's Email" type="text"
                                        name="fatherEmail"
                                        id="fatherEmail"
                                        value={this.state.fatherEmail}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                            </FormRow>
                            <FormRow>
                                <FormColumn>
                                    <Label>Is Your Father An Old Student :</Label>
                                    {/* toggler btn */}
                                </FormColumn>



                            </FormRow>

                            {/* toggler for  if father old student select */}
                            {this.state.IfFatherOldStudent == "true" ?
                                <FormRow>
                                    <FormColumn>
                                        <Label>Father Studied From:</Label>
                                        <FlatInput placeholder="From" type="text"
                                            name="fatherFrom"
                                            id="fatherFrom"
                                            value={this.state.fatherFrom}
                                            onChange={e => this.doChange(e)}></FlatInput>
                                    </FormColumn>
                                    <FormColumn>
                                        <Label>Father Studied To :</Label>
                                        <FlatInput placeholder="To" type="text"
                                            name="fatherTo"
                                            id="fatherTo"
                                            value={this.state.fatherTo}
                                            onChange={e => this.doChange(e)}></FlatInput>
                                    </FormColumn>
                                </FormRow> : ""}
                        </Card>
                    </FormColumn>

                    <FormColumn>
                        <Card>
                            <FormRow>
                                <CardHeader>
                                    2 - Mother's Details
                            </CardHeader>
                            </FormRow>
                            <FormRow>
                                <FormColumn>
                                    <Label>Mother's Name :</Label>
                                    <FlatInput placeholder="Mother's Name" type="text"
                                        name="motherName"
                                        id="motherName"
                                        value={this.state.motherName}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                                <FormColumn>
                                    <Label>Mother's Occupation :</Label>
                                    <FlatInput placeholder="Mother's Occupation" type="text"
                                        name="motherOccupation"
                                        id="motherOccupation"
                                        value={this.state.motherOccupation}
                                        onChange={e => this.doChange(e)}></FlatInput>

                                </FormColumn>
                            </FormRow>
                            <FormRow>
                                <FormColumn>
                                    <Label>Mother's Office Address :</Label>
                                    <FlatInput placeholder="Mother's Official Address " type="text"
                                        name="motherOfficialAddress"
                                        id="motherOfficialAddress"
                                        value={this.state.motherOfficialAddress}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                                <FormColumn>
                                    <Label>Mother's Mobile No:</Label>
                                    <FlatInput placeholder="Mother's Mobile No" type="number"
                                        name="motherMobile"
                                        id="motherMobile"
                                        value={this.state.motherMobile}
                                        onChange={e => this.doChange(e)}></FlatInput>

                                </FormColumn>
                            </FormRow>
                            <FormRow>
                                <FormColumn>
                                    <Label>Mother's Email :</Label>
                                    <FlatInput placeholder="Mother's Email" type="email"
                                        name="motherEmail"
                                        id="motherEmail"
                                        value={this.state.motherEmail}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                                <FormColumn>
                                    <Label>Mother's Maiden Name :</Label>
                                    <FlatInput placeholder="Mother's Maiden Name " type="text"
                                        name="motherMaidenName"
                                        id="motherMaidenName"
                                        value={this.state.motherMaidenName}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                            </FormRow>
                            <FormRow>
                                <FormColumn>
                                    <Label>Is Your Mother An Old Student:</Label>
                                    <Wrapper>
                                        <Item>
                                            <RadioButton
                                                type="radio"
                                                name="motherOldStudent"
                                                value="true"
                                                onChange={event => this.handleSelectChange1(event)}
                                            />
                                            <RadioButtonLabel />
                                            <Heading5 style={{ color: theme.colors.gray }}>Yes</Heading5>
                                        </Item>
                                        <Item>
                                            <RadioButton
                                                type="radio"
                                                name="motherOldStudent"
                                                value="false"
                                                defaultChecked
                                                onChange={event => this.handleSelectChange1(event)}
                                            />
                                            <RadioButtonLabel />
                                            <Heading5 style={{ color: theme.colors.gray }}>No</Heading5>
                                        </Item>
                                    </Wrapper>
                                </FormColumn>
                            </FormRow>
                            {this.state.IfMotherOldStudent == "true" ?
                                <FormRow >
                                    <FormColumn>
                                        <Label>Mother Studied From:</Label>
                                        <FlatInput placeholder="From" type="number"
                                            name="motherFrom"
                                            id="motherFrom"
                                            value={this.state.motherFrom}
                                            onChange={e => this.doChange(e)}></FlatInput>

                                    </FormColumn>
                                    <FormColumn>
                                        <Label>Mother Studied To :</Label>
                                        <FlatInput placeholder="To" type="number"
                                            name="motherTo"
                                            id="motherTo"
                                            value={this.state.motherTo}
                                            onChange={e => this.doChange(e)}></FlatInput>
                                    </FormColumn>
                                </FormRow>
                                : ""}





                        </Card>
                    </FormColumn>
                </FormRow>


                <FormRow>
                    <FormColumn>
                        <Card>
                            <FormRow>
                                <CardHeader>
                                    <FormRow>
                                        <FormColumn>
                                            3 - Guardian Information
                                        </FormColumn>
                                        <div style={{ flexBasis: "20em" }}></div>
                                        <FormColumn>
                                            <div>
                                                <CheckBoxWrapper>
                                                    <CheckBox id="checkbox" type="checkbox" />
                                                    <CheckBoxLabel htmlFor="checkbox" />
                                                </CheckBoxWrapper>
                                            </div>
                                        </FormColumn>
                                    </FormRow>

                                </CardHeader>


                            </FormRow>
                            <FormRow>
                                <FormColumn>
                                    <Label>Guardian's Name :</Label>
                                    <FlatInput placeholder="Guardian Name" type="text"
                                        name="guardianName"
                                        id="guardianName"
                                        value={this.state.guardianName}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                                <FormColumn>
                                    <Label>Guardian's Official Address:</Label>
                                    <FlatInput placeholder="Guardian's Official Address" type="text"
                                        name="guardianOfficialAddress"
                                        id="guardianOfficialAddress"
                                        value={this.state.guardianOfficialAddress}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                            </FormRow>
                            <FormRow>

                                <FormColumn>
                                    <Label>Guardian's Moblie No:</Label>
                                    <FlatInput placeholder="Guardian's Moblie No" type="number"
                                        name="guardianMobile"
                                        id="guardianMobile"
                                        value={this.state.guardianMobile}
                                        onChange={e => this.doChange(e)}></FlatInput>
                                </FormColumn>
                                <FormColumn>
                                    <Label>Guardian's Email:</Label>
                                    <FlatInput placeholder="Guardian's Email" type="text"
                                        name="guardianEmail"
                                        id="guardianEmail"
                                        value={this.state.guardianEmail}
                                        onChange={e => this.doChange(e)}></FlatInput>

                                </FormColumn>
                            </FormRow>
                        </Card>
                    </FormColumn>

                    <FormColumn>
                        <Card>
                            <FormRow>
                                <CardHeader>
                                    4 - Sibling Information
                                </CardHeader>
                            </FormRow>
                            <FormRow>
                                <Wrapper>
                                    <Item>
                                        <RadioButton
                                            type="radio"
                                            name="isSiblingStudyInSameSchool"
                                            value="true"
                                            onChange={event => this.handleSelectChange3(event)}
                                        />
                                        <RadioButtonLabel />
                                        <Heading5 style={{ color: theme.colors.gray }}>Yes</Heading5>
                                    </Item>
                                    <Item>
                                        <RadioButton
                                            type="radio"
                                            name="isSiblingStudyInSameSchool"
                                            value="false"
                                            defaultChecked
                                            onChange={event => this.handleSelectChange3(event)}
                                        />
                                        <RadioButtonLabel />
                                        <Heading5 style={{ color: theme.colors.gray }}>No</Heading5>
                                    </Item>
                                </Wrapper>
                            </FormRow>

                        </Card>














                        <Label>Sibiling's FullName:</Label>
                        <FlatInput placeholder="Sibiling's FullName :" type="text"
                            name="sibilingFullName"
                            id="sibilingFullName"
                            value={this.state.sibilingFullName}
                            onChange={e => this.doChange(e)}></FlatInput>



                        <Label>Sibiling's Grade:</Label>
                        <FlatInput placeholder="Sibiling's Grade :" type="text"
                            name="sibilingGrade"
                            id="sibilingGrade"
                            value={this.state.sibilingGrade}
                            onChange={e => this.doChange(e)}></FlatInput>
                    </FormColumn>
                </FormRow>

            </FormContainer >
        )
    }
}

const mapStatetoProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapDispatchToProps, mapStatetoProps)(ParentForm)
