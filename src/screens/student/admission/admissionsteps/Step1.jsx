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
    { value: '1', label: '2' },
    { value: '1', label: '3' },
    { value: '1', label: '4' },
    { value: '1', label: '5' },
    { value: '1', label: '6' },
    { value: '1', label: '7' },
    { value: '1', label: '8' },
    { value: '1', label: '9' },
    { value: '1', label: '10' },
    { value: '1', label: '11' },
    { value: '1', label: '12' },
    { value: '1', label: '13' },

]


export default class Step1 extends Component {

    handleClickNext = (e) => {
        window.location.hash = "/student/admission/new/step2"
    }
    handleClickPrevious = (e) => {
        window.location.hash = "/student/admission/new/"
    }

    state = {
        admissionDate: new Date(),
        dateOfBirth: new Date()
    };

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

    render() {
        return (
            <FormContainer>
                <br />
                <form>
                    <FormRow>
                        <FormColumn>
                            <Label>Admission No</Label>
                            <FlatInput placeholder="Enter an Admission Number"></FlatInput>
                        </FormColumn>

                        <FormColumn>
                            <Label>First Name :</Label>
                            <FlatInput placeholder="First Name"></FlatInput>
                        </FormColumn>


                        <FormColumn>
                            <Label>Last Name :</Label>
                            <FlatInput placeholder="Last Name"></FlatInput>
                        </FormColumn>

                    </FormRow>
                    <FormRow>
                        <FormColumn>
                            <Label>Middle Name :</Label>
                            <FlatInput placeholder="Middle Name"></FlatInput>

                        </FormColumn>


                        <FormColumn>
                            <Label>Admission Date :</Label>
                            <DatePick
                                selected={this.state.admissionDate}
                                onChange={this.handleChangeAdmissionDate}
                            />
                        </FormColumn>



                        <FormColumn>
                            <Label>Address :</Label>
                            <FlatInput placeholder="Address"></FlatInput>
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                        <FormColumn>
                            <Label>Contact No :</Label>
                            <FlatInput type="number" placeholder="Contact No"></FlatInput>
                        </FormColumn>
                        <FormColumn>
                            <Label>Religion :</Label>
                            <Selection options={Religion} />
                        </FormColumn>
                        <FormColumn>
                            <Label>Race :</Label>
                            <Selection options={Race} />
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                        <FormColumn>
                            <Label>Date Of Birth :</Label>
                            <DatePick
                                selected={this.state.dateOfBirth}
                                onChange={this.handleChangeDateOfBirth}
                            />

                        </FormColumn>

                        <FormColumn>
                            <Label>GN-Division :</Label> <FlatInput placeholder="GN-Division"></FlatInput>
                        </FormColumn>
                        <FormColumn>
                            <Label>Gender :</Label> <Selection options={Gender} />
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                        <FormColumn>
                            <Label>Class :</Label> <Selection options={Class} />
                        </FormColumn>
                        <FormColumn>
                            <Label>Former School :</Label> <FlatInput placeholder="Former School"></FlatInput>
                        </FormColumn>
                        <FormColumn>
                            <Label>Hostel Need :</Label> <FlatInput placeholder="Hostel Need"></FlatInput>
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                        <FormColumn>
                            <Label>Achieve Study  :</Label> <FlatInput placeholder="Achieve Study"></FlatInput>
                        </FormColumn>
                        <FormColumn>
                            <Label>Achieve Sports :</Label> <FlatInput placeholder="Achieve Sports"></FlatInput>
                        </FormColumn>
                        <FormColumn>
                            <Label>Distance :</Label> <FlatInput placeholder="Distance"></FlatInput>
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                        <FormColumn>
                            <Label>Father's NIC No :</Label> <FlatInput placeholder="Father NIC No"></FlatInput>
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                        <FormColumn>

                        </FormColumn>
                        <FormColumn>
                            <PrimaryButton onClick={(e) => this.handleClickNext(e)} type="button"> Next</PrimaryButton>
                        </FormColumn>
                    </FormRow>
                </form>
            </FormContainer >
        )
    }
}
