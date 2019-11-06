import React, { Component } from 'react'
import Heading3 from '../../../components/typography/Heading3'
import Paragraph from '../../../components/typography/Paragraph'
import { connect } from 'react-redux';
import { getParents } from '../../../redux/actions/student/parentAction';
import Card from '../../../components/cards/Card';
import FlexContainer from '../../../components/layout/FlexContainer';
import FlexContent from '../../../components/layout/FlexContent';
import PrimaryCard from '../../../components/cards/PrimaryCard';
import { FormRow, FormColumn } from '../../../components/containers/FormColumn';
import Heading2 from '../../../components/typography/Heading2';
import Heading5 from '../../../components/typography/Heading5';


class ViewProfile extends Component {
    componentDidMount() {
        this.props.fetchParents();
    }
    render() {
        console.log(this.props.parentList);
        return (
            <FlexContainer>
                <FlexContent>
                    <FormColumn>
                        <FormRow>


                            <FormColumn style={{}}>
                                <Heading2>Viththiyanathan Pakeesan</Heading2>
                                <Paragraph>gradeName:</Paragraph><Paragraph>divisionName</Paragraph>
                                <Paragraph>Addmision No:</Paragraph>
                            </FormColumn>
                            <Card>
                            </Card>


                        </FormRow>
                        <FormRow>
                            <FormColumn>
                                <Card>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph >Name:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph >Viththiyanathan Pakeesan</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph >lastname:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph >Viththiyanathan Pakeesan</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph >middlename:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph >Viththiyanathan Pakeesan</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph >address:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph >madduvil</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>contactno:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>N</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>distance:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>contactno:</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>dob:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>Name:</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>race:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>Name:</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>religion:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>Name:</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>formerclass:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>Name:</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>fstudyend:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>Name:</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>fstudystart:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>Name:</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>gender:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>Name:</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>hostelneed:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>Name:</Paragraph></FormColumn>

                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>gsdivision:</Paragraph></FormColumn>
                                        <FormColumn><Paragraph>Name:</Paragraph></FormColumn>
                                    </FormRow>

                                    {/* "achievementsport": "string",
    "achievementstudy": "string",
    
    "firstname": "string",
    "formarschool": "string",
    
    "gradeId": 0,
    "": 0,
    "": "string",
    "": "string",
    "": 0,
    "": "string",
    "": "string",
    
    "motherstudyend": 0,
    "motherstudystart": 0,
    "parId": 0,
    "parentId": "string",
    
    "sId": 0,
           
    "startDate": "string",
    "stuId": "string" */}
                                </Card>
                                <Card>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>guardian:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>guardianname:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>guardianname</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>guardianmobileNo:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>guardianemail:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>guardianoccupation:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                                    </FormRow>
                                </Card>

                            </FormColumn>
                            <FormColumn>
                                <Card>
                                    <Heading5 style={{ marginBottom: "-1em" }}>Father's Details</Heading5>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>fathername:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>fatherOccupation:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>famer</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>fatheremail:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>father@gmail.com:</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>fathermobile:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>0777525987</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>fathersofficialaddress:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>chavakachcheri</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>fatheroldstudent:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>Yes</Paragraph></FormColumn>
                                    </FormRow>
                                </Card>

                                <Card  >
                                    <Heading5>Mother's Details</Heading5>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>mothername:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>motherOccupation:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>famer</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>motheremail:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>mother@gmail.com:</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>mothermobile:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>0777525987</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>motherofficialaddress:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>chavakachcheri</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>motheroldstudent:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>Yes</Paragraph></FormColumn>
                                    </FormRow>
                                </Card>

                                <Card >
                                    <Heading5>ch's Details</Heading5>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>sibilingsfullname:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>Yes</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>sibilingsGrade:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>Yes</Paragraph></FormColumn>
                                    </FormRow>

                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>sililingsadmission:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>Yes</Paragraph></FormColumn>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <FormColumn><Paragraph>sililingsadmission:</Paragraph></FormColumn>
                                        <FormColumn viewprofile><Paragraph>Yes</Paragraph></FormColumn>
                                    </FormRow>
                                </Card>

                            </FormColumn>

                            <FormColumn>
                                <Card   >
                                    <Heading5>ex's Details</Heading5>
                                </Card>
                                <Card>
                                    <Heading5 style={{ padding: "0", fontSize: "12" }}>sports  Details</Heading5>
                                </Card>
                                <Card style={{ height: "120px", width: "250px", paddingTop: "0" }}  >
                                    <Heading5>Father's Details</Heading5>
                                </Card>
                                <Card style={{ height: "120px", width: "250px", paddingTop: "0" }}  >
                                    <Heading5>Father's Details</Heading5>
                                </Card>

                            </FormColumn>


                        </FormRow>

                    </FormColumn>

                </FlexContent>

            </FlexContainer >
        )
    }
}

const mapStateToProps = state => ({
    parentList: state.parentReducer.parents
})

const mapDispatchToProps = dispatch => ({
    fetchParents: () => dispatch(getParents())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)

