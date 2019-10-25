import React, { Component } from 'react'
import Layout from '../../../../layout/Layout'
import Heading3 from '../../../../components/typography/Heading3'
import { Container, Row, Col } from 'react-grid-system'



import Input from '../../../../components/inputs/Input';
import Label from '../../../../components/typography/Label';
import FormContainer from '../../../../components/containers/FormContainer';
import FlatInput from '../../../../components/inputs/FlatInput';
import { FormColumn, FormRow, FormWrapper } from '../../../../components/containers/FormColumn';
import PrimaryButton from '../../../../components/button/PrimaryButton';



export default class Step3 extends Component {


    render() {
        return (
            <FormContainer>
                <form>
                    <FormRow>
                        <FormColumn>
                            <Label>Former School</Label>
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
                            <FlatInput placeholder="Admission Date"></FlatInput>
                        </FormColumn>



                        <FormColumn>
                            <Label>Address :</Label>
                            <FlatInput placeholder="Address"></FlatInput>
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                        <FormColumn>
                            <Label>Contact No :</Label>
                            <FlatInput placeholder="Contact No"></FlatInput>
                        </FormColumn>
                        <FormColumn>
                            <Label>Religion :</Label>
                            <FlatInput placeholder="Religion"></FlatInput>
                        </FormColumn>
                        <FormColumn>
                            <Label>Race :</Label>
                            <FlatInput placeholder="Race"></FlatInput>
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                        <FormColumn>
                            <Label>Date Of Birth :</Label>
                            <FlatInput placeholder="Date Of Birth"></FlatInput>

                        </FormColumn>

                        <FormColumn>
                            <Label>GN-Division :</Label> <FlatInput placeholder="GN-Division"></FlatInput>
                        </FormColumn>
                        <FormColumn>
                            <Label>Gender :</Label> <FlatInput placeholder="Gender"></FlatInput>
                        </FormColumn>
                    </FormRow>
                    <FormRow>
                        <FormColumn>
                            <Label>Class :</Label> <FlatInput placeholder="Class"></FlatInput>
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
                </form>
            </FormContainer >
        )
    }
}
