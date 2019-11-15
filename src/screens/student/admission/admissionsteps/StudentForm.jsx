import React, { Component } from 'react'
import Layout from '../../../../layout/Layout'
import Heading3 from '../../../../components/typography/Heading3'
import { Container, Row, Col } from 'react-grid-system'
import Select from 'react-select';




import Input from '../../../../components/inputs/Input';
import Label from '../../../../components/typography/Label';
import FormContainer from '../../../../components/containers/FormContainer';
import FlatInput from '../../../../components/inputs/FlatInput';
import { FormColumn, FormRow, FormWrapper } from '../../../../components/containers/FormColumn';
import PrimaryButton from '../../../../components/button/PrimaryButton';
//import custom styled react-select component
import Selection from '../../../../components/inputs/Select';
//import date-picker and its style
import DatePick from "../../../../components/inputs/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux'
import Card from '../../../../components/cards/Card';
import CardHeader from './cardHeader';
import { Dropdown, Option } from '../../../../components/inputs/Dropdown';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from '../../../../components/inputs/Toggler';
import theme from '../../../../theme/theme';
//profile avatar icon
import ProfileIMG from '../../../../assets/icons/icons8/profileIcon.png';

//options for the selections
const Religion = [
    { value: 'hinduism', label: 'Hinduism' },
    { value: 'christianity_rc', label: 'Christianity RC' },
    { value: 'christianity-nrc', label: 'Christianity Non-RC' }
]

const Race = [
    { value: 'sinhalese', label: 'Sinhalese' },
    { value: 'Tamil', label: 'Tamil' },
    { value: 'Indian-Tamil', label: 'Indian-Tamil' },
    { value: 'Muslims', label: 'Muslims' }
]

const Gender = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },

]

const Class = [
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
    { value: '13', label: '13' },

]


class StudentForm extends Component {

    state = {
        studentId: "",
        firstName: "",
        lastName: "",
        middleName: "",
        admissionDate: new Date(),
        dateOfBirth: new Date(),
        address: "",
        contactNo: "",
        religion: "",
        race: "",
        gsDivision: "",
        gender: "",
        formerSchool: "",
        formerClass: "",
        currentClass: "",
        isHostelNeeded: false,
        distance: "",
        achievementStudy: "",
        achievementSport: "",
        divisionId: "",
        parentId: ""

    }

    doChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
        //console.log(this.state.fatherName)

    }

    handleClickNext = (e) => {

    }
    handleClickPrevious = (e) => {
        window.location.hash = "/student/admission/new/step1"
    }



    handleChangeAdmissionDate = date => {
        this.setState({
            admissionDate: date,
        });
    };

    handleChangeDateOfBirth = date => {
        this.setState({
            dateOfBirth: date,
        });
    };

    handleToggleHostelNeed = e => {
        if (this.state.isHostelNeeded == false) {
            this.setState({
                isHostelNeeded: true
            })
            console.log(this.state.isHostelNeeded);
        }
        else if (this.state.isHostelNeeded == true) {
            this.setState({
                isHostelNeeded: false
            })
            console.log(this.state.isHostelNeeded);
        }
    }

    render() {
        // console.log(this.state.isHostelNeeded);
        return (
            <FormContainer>

                <form>
                    <FormRow>
                        <FormColumn>
                            <Card>
                                <FormRow>
                                    <CardHeader>
                                        Student Information
                                    </CardHeader>
                                </FormRow>
                                <FormRow>
                                    <FormColumn formGap>
                                        <Label>Admission No :</Label>
                                        <FlatInput placeholder="Enter an Admission Number" type="text"
                                            name="studentId"
                                            id="studentId"
                                            value={this.state.studentId}
                                            onChange={e => this.doChange(e)} ></FlatInput>
                                    </FormColumn>
                                    <FormColumn formGap></FormColumn>
                                    <FormColumn>
                                        <Label>First Name :</Label>
                                        <FlatInput placeholder="First Name" type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={this.state.firstName}
                                            onChange={e => this.doChange(e)}></FlatInput>

                                    </FormColumn>
                                </FormRow>
                                <FormRow>
                                    <FormColumn formGap>
                                        <Label>Last Name :</Label>
                                        <FlatInput placeholder="Last Name" type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={this.state.lastName}
                                            onChange={e => this.doChange(e)} ></FlatInput>
                                    </FormColumn>
                                    <FormColumn formGap></FormColumn>
                                    <FormColumn formGap>
                                        <Label>Middle Name :</Label>
                                        <FlatInput placeholder="Middle Name" type="text"
                                            name="middleName"
                                            id="middleName"
                                            value={this.state.middleName}
                                            onChange={e => this.doChange(e)} ></FlatInput>
                                    </FormColumn>
                                </FormRow>
                                <FormRow>
                                    <FormColumn formGap>
                                        <Label>Admission Date :</Label>
                                        <DatePick
                                            selected={this.state.admissionDate}
                                            onChange={this.handleChangeAdmissionDate}
                                        />
                                    </FormColumn>
                                    <FormColumn formGap></FormColumn>
                                    <FormColumn formGap>
                                        <Label>Address :</Label>
                                        <FlatInput placeholder="Address" type="text"
                                            name="address"
                                            id="address"
                                            value={this.state.address}
                                            onChange={e => this.doChange(e)} ></FlatInput>
                                    </FormColumn>
                                </FormRow>
                                <FormRow>
                                    <FormColumn formGap>
                                        <Label>Contact No :</Label>
                                        <FlatInput type="number" placeholder="Contact No" type="number"
                                            name="contactNo"
                                            id="contactNo"
                                            value={this.state.contactNo}
                                            onChange={e => this.doChange(e)}></FlatInput>
                                    </FormColumn>
                                    <FormColumn formGap></FormColumn>
                                    <FormColumn formGap style={{ marginRight: "0.5em" }}>
                                        <Label>Religion :</Label>
                                        <Dropdown options={Religion} type="text"
                                            name="religion"
                                            id="religion"
                                            value={this.state.religion}
                                            onChange={e => this.doChange(e)}>
                                            <Option>Hinduism</Option>
                                            <Option>Christianity_RC</Option>
                                        </Dropdown>

                                    </FormColumn>
                                </FormRow>
                                <FormRow>
                                    <FormColumn formGap>
                                        <Label>Race :</Label>
                                        <Dropdown
                                            name="race"
                                            id="race"
                                            value={this.state.race}
                                        // onChange={e => this.handleSelect(e)}
                                        >
                                            <Option>Sinhalese</Option>
                                            <Option>Srilankan Tamil</Option>
                                            <Option>Srilankan Muslim</Option>
                                            <Option>Srilankan Burghese</Option>
                                            <Option>Indian Tamil</Option>
                                        </Dropdown>
                                    </FormColumn>
                                    <FormColumn formGap></FormColumn>
                                    <FormColumn formGap>

                                        <Label>Date Of Birth :</Label>
                                        <DatePick
                                            selected={this.state.dateOfBirth}
                                            onChange={this.handleChangeDateOfBirth}
                                        />
                                    </FormColumn>
                                </FormRow>
                                <FormRow>
                                    <FormColumn formGap>
                                        <Label>GN-Division :</Label> <FlatInput placeholder="GN-Division" type="text"
                                            name="gsDivision"
                                            id="gsDivision"
                                            value={this.state.gsDivision}
                                            onChange={e => this.doChange(e)} ></FlatInput>
                                    </FormColumn>
                                    <FormColumn formGap></FormColumn>
                                    <FormColumn formGap style={{ marginRight: "0.5em" }}>
                                        <Label>Gender :</Label>
                                        <Dropdown
                                            type="text"
                                            name="gender"
                                            id="gender"
                                            value={this.state.gender}
                                            onChange={e => this.doChange(e)}>
                                            <Option>Male</Option>
                                            <Option>Female</Option>
                                            <Option>Not Specified</Option>
                                        </Dropdown>
                                    </FormColumn>
                                </FormRow>
                                <FormRow>
                                    <FormColumn formGap>
                                        <Label>Father's Nic No :</Label> <FlatInput placeholder="Father's Nic No" type="text"
                                            name="parentId"
                                            id="parentId"
                                            value={this.state.parentId}
                                            onChange={e => this.doChange(e)} ></FlatInput>
                                    </FormColumn>
                                    <FormColumn formGap></FormColumn>
                                    <FormColumn formGap>
                                        <Label>Division Id :</Label> <FlatInput placeholder="Division Id" type="text"
                                            name="divisionId"
                                            id="divisionId"
                                            value={this.state.divisionId}
                                            onChange={e => this.doChange(e)} ></FlatInput>
                                    </FormColumn>
                                </FormRow>

                            </Card>
                        </FormColumn>

                        {/* 2nd Column */}
                        <FormColumn>

                            {/* former school tab */}
                            <FormRow>
                                <Card style={{ height: "13em" }}>
                                    <FormRow>
                                        <CardHeader>
                                            Former School Details
                                </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Current Class :</Label> <FlatInput placeholder="Current Class" type="text"
                                                name="currentClass"
                                                id="currentClass"
                                                value={this.state.currentClass}
                                                onChange={e => this.doChange(e)} ></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>
                                            <Label>Former School :</Label> <FlatInput placeholder="Former School" type="text"
                                                name="formerSchool"
                                                id="formerSchool"
                                                value={this.state.formerSchool}
                                                onChange={e => this.doChange(e)} ></FlatInput>
                                        </FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn>
                                            <Label>Former Class :</Label> <FlatInput placeholder="Former Class" type="text"
                                                name="formerClass"
                                                id="formerClass"
                                                value={this.state.formerClass}
                                                onChange={e => this.doChange(e)} ></FlatInput>
                                        </FormColumn>
                                        <FormColumn formGap></FormColumn>
                                        <FormColumn>

                                        </FormColumn>
                                    </FormRow>
                                </Card>
                            </FormRow>

                            {/* hostel need tab */}
                            <FormRow style={{ marginTop: "-2em" }}>
                                <Card>
                                    <FormRow>
                                        <CardHeader style={{ height: "1.8em" }}>
                                            <FormRow>
                                                <FormColumn style={{ flexBasis: "30em", marginTop: "0.1em" }}>Hostel Needs</FormColumn>
                                                <FormColumn style={{ marginTop: "0.1em" }}>
                                                    {/* toggler btn */}
                                                    <div>
                                                        <CheckBoxWrapper>
                                                            <CheckBox
                                                                id="isStudentNeedHostel"
                                                                name="isStudentNeedHostel"
                                                                type="checkbox"
                                                                checked={this.state.isHostelNeeded}
                                                                onChange={e => this.handleToggleHostelNeed(e)}
                                                            />
                                                            <CheckBoxLabel htmlFor="isStudentNeedHostel" />
                                                        </CheckBoxWrapper>
                                                    </div>
                                                </FormColumn>
                                            </FormRow>
                                        </CardHeader>
                                    </FormRow>

                                    {this.state.isHostelNeeded ?
                                        <FormRow>
                                            <FormColumn>

                                            </FormColumn>
                                            <FormColumn>

                                            </FormColumn>
                                        </FormRow>
                                        : ""}
                                </Card>
                            </FormRow>

                            {/* profile picture tab */}
                            <FormRow style={{ marginTop: "-2em" }}>
                                <Card>
                                    <FormRow>
                                        <CardHeader>
                                            Profile Picture
                                        </CardHeader>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn></FormColumn>
                                        <FormColumn>
                                            <img src="https://img.icons8.com/color/48/000000/person-male.png"></img>
                                        </FormColumn>
                                        <FormColumn></FormColumn>
                                    </FormRow>
                                    <FormRow>
                                        <FormColumn></FormColumn>
                                        <FormColumn>
                                            <FlatInput style={{ width: "15em" }} type="file" />
                                        </FormColumn>
                                        <FormColumn></FormColumn>
                                    </FormRow>
                                </Card>
                            </FormRow>
                        </FormColumn>


                    </FormRow>


                    {/*

                

               


                    <Label>Hostel Need :</Label> <FlatInput placeholder="Hostel Need" type="text"
                        name="hostelNeed"
                        id="hostelNeed"
                        value={this.state.hostelNeed}
                        onChange={e => this.doChange(e)} ></FlatInput>

                    <Label>Achievement In Study :</Label> <FlatInput placeholder="Achievement In Study" type="text"
                        name="achievementStudy"
                        id="achievementStudy"
                        value={this.state.achievementStudy}
                        onChange={e => this.doChange(e)} ></FlatInput>

                    <Label>Achievement In Sports :</Label> <FlatInput placeholder="Achievement In Sports" type="text"
                        name="achievementSport"
                        id="achievementSport"
                        value={this.state.achievementSport}
                        onChange={e => this.doChange(e)} ></FlatInput>

                    <Label>Division Id :</Label> <FlatInput placeholder="Division Id" type="text"
                        name="divisionId"
                        id="divisionId"
                        value={this.state.divisionId}
                        onChange={e => this.doChange(e)} ></FlatInput>

                    <Label>Father's Nic No :</Label> <FlatInput placeholder="Father's Nic No" type="text"
                        name="parentId"
                        id="parentId"
                        value={this.state.parentId}
                        onChange={e => this.doChange(e)} ></FlatInput> */}


                    <FormRow>
                        <FormColumn>
                            <PrimaryButton onClick={(e) => this.handleClickPrevious(e)} type="button">Previous</PrimaryButton>
                        </FormColumn>
                        <div style={{ flexBasis: "60em" }}></div>
                        <FormColumn>
                            <PrimaryButton onClick={(e) => this.handleClickNext(e)} type="button">Submit</PrimaryButton>
                        </FormColumn>

                    </FormRow>
                </form >
            </FormContainer >
        )
    }
}

const mapStatetoProps = state => {

}

const mapDispatchToProps = dispatch => {

}


export default connect(mapStatetoProps, mapDispatchToProps)(StudentForm)
