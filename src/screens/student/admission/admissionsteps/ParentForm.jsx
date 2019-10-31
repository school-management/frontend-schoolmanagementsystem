import React, { Component } from 'react'
import Layout from '../../../../layout/Layout'
import Heading3 from '../../../../components/typography/Heading3'
import { Container, Row, Col } from 'react-grid-system'
import Select from 'react-select'



import Input from '../../../../components/inputs/Input';
import Label from '../../../../components/typography/Label';
import FormContainer from '../../../../components/containers/FormContainer';
import FlatInput from '../../../../components/inputs/FlatInput';
import { FormColumn, FormRow, FormWrapper } from '../../../../components/containers/FormColumn';
import PrimaryButton from '../../../../components/button/PrimaryButton';
import Selection from '../../../../components/inputs/Select'
import { connect } from 'react-redux'

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
        guardian: "",
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
        //console.log(this.state.fatherName)

    }

    handleSelect = e => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <FormContainer>

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
                    <FormColumn>
                        <Label>Father's Occupation :</Label>
                        <FlatInput placeholder="Father's Occupation " type="text"
                            name="fatherOccupation"
                            id="fatherOccupation"
                            value={this.state.fatherOccupation}
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
                        <Label>Father's Office Address :</Label>
                        <FlatInput placeholder="Father's Office Address" type="text"
                            name="fatherOfficialAddress"
                            id="fatherOfficialAddress"
                            value={this.state.fatherOfficialAddress}
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
                        <Selection
                            options={isOldStudent}
                            placeholder="Is Your Father an Old Student?"
                            value={this.state.IfFatherOldStudent}
                            onChange={(e) => this.handleSelect(e)}
                        ></Selection>
                    </FormColumn>
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
                    <FormColumn>
                        <Label>Mother's Office Address :</Label>
                        <FlatInput placeholder="Mother's Official Address " type="text"
                            name="motherOfficialAddress"
                            id="motherOfficialAddress"
                            value={this.state.motherOfficialAddress}
                            onChange={e => this.doChange(e)}></FlatInput>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <Label>Mother's Mobile No:</Label>
                        <FlatInput placeholder="Mother's Mobile No" type="number"
                            name="motherMobile"
                            id="motherMobile"
                            value={this.state.motherMobile}
                            onChange={e => this.doChange(e)}></FlatInput>
                    </FormColumn>
                    <FormColumn>
                        <Label>Mother's Email :</Label>
                        <FlatInput placeholder="Mother's Email" type="text"
                            name="motherEmail"
                            id="motherEmail"
                            value={this.state.motherEmail}
                            onChange={e => this.doChange(e)}></FlatInput>
                    </FormColumn>
                    <FormColumn>
                        <Label disabled>Is Your Mother An Old Student:</Label>
                        <Selection isDisabled options={isOldStudent} type="text"
                            name="IfMotherOldStudent"
                            id="IfMotherOldStudent"
                            value={this.state.IfMotherOldStudent}
                            onChange={e => this.doChange(e)}></Selection>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <Label>Mother's Maiden Name :</Label>
                        <FlatInput placeholder="Mother's Maiden Name " type="text"
                            name="motherMaidenName"
                            id="motherMaidenName"
                            value={this.state.motherMaidenName}
                            onChange={e => this.doChange(e)}></FlatInput>
                    </FormColumn>
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
                <FormRow>
                    <FormColumn>
                        <Label>Guardian :</Label>
                        <Selection
                            options={isOldStudent}
                            placeholder="Guardian"
                            value={this.state.guardian}
                            onChange={(e) => this.handleSelect(e)}
                        ></Selection>
                    </FormColumn>
                    <FormColumn>
                        <Label>Guardian's Name :</Label>
                        <FlatInput placeholder="Guardian Name" type="text"
                            name="guardianName"
                            id="guardianName"
                            value={this.state.guardianName}
                            onChange={e => this.doChange(e)}></FlatInput>
                    </FormColumn>
                    <FormColumn>
                        <Label>Guardian's Occupation:</Label>
                        <FlatInput placeholder="Guardian Occupation" type="text"
                            name="guardianOccupation"
                            id="guardianOccupation"
                            value={this.state.guardianOccupation}
                            onChange={e => this.doChange(e)}></FlatInput>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <Label>Guardian's Official Address:</Label>
                        <FlatInput placeholder="Guardian's Official Address" type="text"
                            name="guardianOfficialAddress"
                            id="guardianOfficialAddress"
                            value={this.state.guardianOfficialAddress}
                            onChange={e => this.doChange(e)}></FlatInput>
                    </FormColumn>
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
                <FormRow>
                    <FormColumn>
                        <Label>Sibiling's Admission No:</Label>
                        <FlatInput placeholder="Sibiling's Admission No :" type="text"
                            name="sibilingAdmissionNo"
                            id="sibilingAdmissionNo"
                            value={this.state.sibilingAdmissionNo}
                            onChange={e => this.doChange(e)}></FlatInput>
                    </FormColumn>
                    <FormColumn>
                        <Label>Sibiling's FullName:</Label>
                        <FlatInput placeholder="Sibiling's FullName :" type="text"
                            name="sibilingFullName"
                            id="sibilingFullName"
                            value={this.state.sibilingFullName}
                            onChange={e => this.doChange(e)}></FlatInput>
                    </FormColumn>
                    <FormColumn>
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
