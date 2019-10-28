import React, { Component } from 'react'
import Layout from '../../../layout/Layout'
import Heading3 from '../../../components/typography/Heading3'
import { Container, Row, Col } from 'react-grid-system'
import theme from '../../../theme/theme';
//styles for steps



import Input from '../../../components/inputs/Input';
import Label from '../../../components/typography/Label';
import FormContainer from '../../../components/containers/FormContainer';
import FlatInput from '../../../components/inputs/FlatInput';
import { FormColumn, FormRow, FormWrapper } from '../../../components/containers/FormColumn';
import PrimaryButton from '../../../components/button/PrimaryButton';
import { PlaceholderInput, FLabel } from '../../../components/inputs/PlaceholderInput';
import Step1 from './admissionsteps/Step1';
import AdmissionMultistepRouter from '../../../router/AdmissionMultistepRouter';
import StepZilla from "react-stepzilla";
import Step2 from './admissionsteps/Step2';
import Step3 from './admissionsteps/Step3';

//defining steps
const steps =
    [
        { name: 'Student Details', component: <Step1 /> },
        { name: 'Parent Details', component: <Step2 /> },
        { name: 'Extra Details', component: <Step3 /> }
    ]


export default class NewAdmission extends Component {
    render() {
        return (
            <FormContainer>
                {/* <div className='step-progress'>
                    <StepZilla
                        steps={steps}
                        stepsNavigation={true}
                        prevBtnOnLastStep={true}
                        startAtStep={0}
                        showSteps={true}
                        dontValidate={true}
                        nextButtonCls="btn"
                        nextTextOnFinalActionStep="Submit"
                    />
                </div> */}
                <AdmissionMultistepRouter />
            </FormContainer>
        )
    }
}
