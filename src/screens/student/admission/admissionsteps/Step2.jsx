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

// const isOldStudent = [
//     { value: 'True', label: 'Yes' },
//     { value: 'False', label: 'No' }
// ]

const isOldStudent = [
    { value: "true", label: 'Yes' },
    { value: "false", label: 'No' }
]

const Year = [
    { value: "2000", label: '2000' },
    { value: "2001", label: '2001' },
    { value: "2002", label: '2002' },
    { value: "2003", label: '2003' },
    { value: "2004", label: '2004' },
    { value: "2005", label: '2005' },
    { value: "2006", label: '2006' },
    { value: "2007", label: '2007' }
]

export default class Step2 extends Component {



    render() {
        return (
            <FormContainer>

                <FormRow>
                    <FormColumn>
                        <Label>Father Name</Label>
                        <FlatInput placeholder="Enter your Father Name"></FlatInput>

                    </FormColumn>

                    <FormColumn>
                        <Label>Father NIC No</Label>
                        <FlatInput placeholder="Father NIC No"></FlatInput>
                    </FormColumn>


                    <FormColumn>
                        <Label>Father Occupation :</Label>
                        <FlatInput placeholder="Father Occupation "></FlatInput>
                    </FormColumn>

                </FormRow>
                <FormRow>
                    <FormColumn>
                        <Label>Father Moblie No:</Label>
                        <FlatInput placeholder="Father Moblie No"></FlatInput>

                    </FormColumn>


                    <FormColumn>
                        <Label>Father Office Address :</Label>
                        <FlatInput placeholder="Father Office Address"></FlatInput>
                    </FormColumn>



                    <FormColumn>
                        <Label>Father Email:</Label>
                        <FlatInput placeholder="Father Email"></FlatInput>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <Label>Father Old Student :</Label>
                        <Selection options={isOldStudent}></Selection>
                    </FormColumn>
                    <FormColumn>
                        <FormRow>
                            <Label>From:</Label>
                            <Selection options={Year} mini></Selection>
                            <Label>To :</Label>
                            <Selection options={Year} mini></Selection>
                        </FormRow>
                        <Label>From:</Label>
                        <FlatInput placeholder="From"></FlatInput>
                    </FormColumn>
                    <FormColumn>
                        <Label>To :</Label>
                        <FlatInput placeholder="To"></FlatInput>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <Label>Mother Name :</Label>
                        <FlatInput placeholder="Mother Name"></FlatInput>

                    </FormColumn>

                    <FormColumn>
                        <Label>Mother Occupation :</Label>
                        <FlatInput placeholder="Mother Occupation"></FlatInput>
                    </FormColumn>
                    <FormColumn>
                        <Label>Mother Office Address :</Label>
                        <FlatInput placeholder="Mother Office Address "></FlatInput>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <Label>Mother Mobile No:</Label>
                        <FlatInput placeholder="Mother Mobile No"></FlatInput>
                    </FormColumn>
                    <FormColumn>
                        <Label>Mother Email :</Label> <FlatInput placeholder="Mother Email"></FlatInput>
                    </FormColumn>
                    <FormColumn>
                        <Label disabled>Mother Old Student:</Label>
                        <Selection isDisabled options={isOldStudent}></Selection>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <Label>From:</Label> <FlatInput placeholder="From"></FlatInput>
                    </FormColumn>
                    <FormColumn>
                        <Label>To :</Label> <FlatInput placeholder="To"></FlatInput>
                    </FormColumn>
                    <FormColumn>
                        <Label>Guardian Name :</Label> <FlatInput placeholder="Guardian Name"></FlatInput>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <Label>Guardian Occupation:</Label> <FlatInput placeholder="Guardian Occupation"></FlatInput>
                    </FormColumn>

                    <FormColumn>
                        <Label>Guardian Moblie No:</Label> <FlatInput placeholder="Guardian Moblie No"></FlatInput>
                    </FormColumn>

                    <FormColumn>
                        <Label>Guardian Email:</Label> <FlatInput placeholder="Guardian Email"></FlatInput>
                    </FormColumn>
                </FormRow>

            </FormContainer >
        )
    }
}
