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
import theme from '../../../theme/theme';


class ViewProfile extends Component {
    componentDidMount() {
        this.props.fetchParents();
    }
    render() {
        console.log(this.props.parentList);
        return (
            // <FlexContainer>
            // <FlexContent>
            <FormColumn>
                <FormRow style={{ padding: "0", paddingRight: "3em", paddingLeft: "3em", margin: "0", }}>


                    <FormColumn style={{ padding: "0.9em", margin: "0", color: theme.colors.viewhed }}>
                        <Heading2 >Viththiyanathan Pakeesan</Heading2>

                        <FormRow style={{ padding: "0" }}><Paragraph >Addmision No:</Paragraph>
                            <Paragraph style={{ color: theme.colors.viewText, paddingLeft: "0.6em" }}>2019chc001</Paragraph>
                            <Paragraph style={{ paddingLeft: "2em" }}>grade:</Paragraph>
                            <Paragraph style={{ paddingLeft: "0.6em", color: theme.colors.viewText }}>11</Paragraph>
                            <Paragraph style={{ color: theme.colors.viewText, paddingLeft: "0.1em" }}>A</Paragraph></FormRow>

                    </FormColumn>
                    <Card style={{ height: "80PX", width: "80PX" }}>
                    </Card>


                </FormRow>
                <FormRow>
                    <FormColumn>
                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading2 style={{
                                padding: "0", textAlign: "center", paddingRight: "3em",
                                paddingLeft: "3em", margin: "0", color: theme.colors.viewhed,
                            }}>Personal Informations</Heading2>
                            <FormRow style={{ padding: "0", }} >
                                <FormColumn viewprofile><Paragraph >Name:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph >Pakeesan</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ padding: "0", }}>lastname:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph >Pakeesan</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph >middlename:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph style={{ padding: "0", }}>pakees</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile style={{ padding: "-1em", }}><Paragraph >address:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph >madduvil</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>contactno:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>0770525846</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>distance:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>5km</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>dob:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>1994:02:25</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>race:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>srilankan Tamil</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>religion:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>Hindu</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>formerclass:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>05</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>fstudyend:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>2005</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>fstudystart:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>Name:</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>gender:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>male</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>hostelneed:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>yes</Paragraph></FormColumn>

                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>gsdivision:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>Name:</Paragraph></FormColumn>
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
                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading2 style={{
                                padding: "0", textAlign: "center", paddingRight: "3em",
                                paddingLeft: "3em", margin: "0", color: theme.colors.viewhed,
                            }}>Guardian Details</Heading2>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>guardian:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>guardianname:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>guardianname</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>guardianmobileNo:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>guardianemail:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>guardianoccupation:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                        </Card>

                    </FormColumn>
                    <FormColumn>
                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading2 style={{
                                padding: "0", textAlign: "center", paddingRight: "3em", paddingLeft: "3em",
                                margin: "0", color: theme.colors.viewhed,
                            }}>Father's Details</Heading2>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>fathername:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>fatherOccupation:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>famer</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>fatheremail:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>father@gmail.com:</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>fathermobile:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>0777525987</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>Fathers Official Address:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>chavakachcheri</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>fatheroldstudent:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>Yes</Paragraph></FormColumn>
                            </FormRow>
                        </Card>

                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading2 style={{
                                padding: "0", textAlign: "center", paddingRight: "3em", paddingLeft: "3em",
                                margin: "0", color: theme.colors.viewhed,
                            }}>EX-CURRICLUAR </Heading2>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>mothername:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>motherOccupation:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>famer</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>motheremail:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>mother@gmail.com</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile> <Paragraph>mothermobile:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>0777525987</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>mother Official Address:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>chavakachcheri</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>motheroldstudent:</Paragraph></FormColumn>
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
                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading2 style={{
                                padding: "0", textAlign: "center",
                                margin: "0", color: theme.colors.viewhed,
                            }}>Mother's Details</Heading2>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>mothername:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>motherOccupation:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>famer</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>motheremail:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>mother@gmail.com</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile> <Paragraph>mothermobile:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>0777525987</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>mother Official Address:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>chavakachcheri</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph>motheroldstudent:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>Yes</Paragraph></FormColumn>
                            </FormRow>
                        </Card>

                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading2 style={{
                                padding: "0", textAlign: "center", paddingRight: "3em", paddingLeft: "3em",
                                margin: "0", color: theme.colors.viewhed,
                            }}>sililings </Heading2>
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
                        <Card>
                            <Heading5 style={{ padding: "0", fontSize: "12" }}>sports  Details</Heading5>
                        </Card>
                        <Card  >
                            <Heading5>Father's Details</Heading5>
                        </Card>

                    </FormColumn>


                </FormRow>

            </FormColumn>

            // </FlexContent>

            // </FlexContainer >
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

