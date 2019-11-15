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


import theme from '../../../theme/theme';
import Heading2 from '../../../components/typography/Heading2';
import Heading5 from '../../../components/typography/Heading5';
import Heading4 from '../../../components/typography/Heading4';
import Heading6 from '../../../components/typography/Heading6';



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


                    <FormColumn style={{ padding: "0.4em", margin: "0", color: theme.colors.viewText }}>
                        <Heading2 >Viththiyanathan Pakeesan</Heading2>

                        <FormRow style={{ padding: "0" }}><Paragraph >Admission No:</Paragraph>
                            <Paragraph style={{ color: theme.colors.viewText, paddingLeft: "0.6em" }}>2019chc001</Paragraph>
                            <Paragraph style={{ paddingLeft: "2em" }}>Grade:</Paragraph>
                            <Paragraph style={{ paddingLeft: "0.6em", color: theme.colors.viewText }}>11</Paragraph>
                            <Paragraph style={{ color: theme.colors.viewText, paddingLeft: "0.1em" }}>A</Paragraph></FormRow>

                    </FormColumn>
                    <Card style={{ height: "80px", width: "80px" }}>
                    </Card>


                </FormRow>
                <FormRow>

                    <Card style={{ padding: "0.9em", width: "65em", color: theme.colors.viewText }}>
                        <Heading4 style={{
                            padding: "0", textAlign: "center", margin: "0", color: theme.colors.viewhed,
                            borderBottom: "2px solid #979797",
                            background: theme.colors.viewText,
                            borderRadius: theme.size.btnRadiusWhenHover
                        }}>Personal Informations</Heading4>

                        <FormRow style={{ padding: "0" }}>
                            <FormColumn viewprofile ><Paragraph style={{ color: theme.colors.viewhed }}>Address:</Paragraph > </FormColumn>
                            <FormColumn viewprofile><Paragraph >madduvil North, chavakachcheri</Paragraph></FormColumn>

                            <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>StudyStart:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>2010.09.09</Paragraph></FormColumn>

                            <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>distance:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>5km</Paragraph></FormColumn>

                            <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>DoB:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>1994:02:25</Paragraph></FormColumn>
                        </FormRow>

                        <FormRow style={{ padding: "0" }}>
                            <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>gender:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>male</Paragraph></FormColumn>

                            <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>race:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>srilankan Tamil</Paragraph></FormColumn>

                            <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>religion:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>Hindu</Paragraph></FormColumn>

                            <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>gsdivision:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>J/315</Paragraph></FormColumn>
                        </FormRow>

                        {/* <FormRow style={{ padding: "0" }}>
                            <FormColumn viewprofile><Paragraph>formerclass:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>05</Paragraph></FormColumn>

                            <FormColumn viewprofile><Paragraph>fstudyend:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>2005</Paragraph></FormColumn>

                            <FormColumn viewprofile><Paragraph>fstudystart:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>Name:</Paragraph></FormColumn>
                        </FormRow> */}

                        {/* <FormRow style={{ padding: "0" }}>


                            <FormColumn viewprofile><Paragraph>hostelneed:</Paragraph></FormColumn>
                            <FormColumn viewprofile><Paragraph>yes</Paragraph></FormColumn>



                        </FormRow> */}
                    </Card>
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


                <FormRow>

                    <FormRow>
                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading4 style={{
                                padding: "0", textAlign: "center", margin: "0", color: theme.colors.viewhed,
                                borderBottom: "2px solid #979797",
                                background: theme.colors.viewText,
                                borderRadius: theme.size.btnRadiusWhenHover
                            }}>Father's Details</Heading4>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>Name:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>Occupation:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>famer</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>Father Email:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>father@gmail.com</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>fathermobile:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>0777525987</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}> Father Official Address:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>chavakachcheri</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>fatheroldstudent:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>Yes</Paragraph></FormColumn>
                            </FormRow>
                        </Card>

                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading4 style={{
                                padding: "0", textAlign: "center", margin: "0", color: theme.colors.viewhed,
                                borderBottom: "2px solid #979797",
                                background: theme.colors.viewText,
                                borderRadius: theme.size.btnRadiusWhenHover
                            }}>Mother's  Details </Heading4>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>Name:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>Occupation:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>famer</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>Mother Email:</Paragraph></FormColumn>
                                <FormColumn viewprofile ><Paragraph >mother@gmail.com</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile> <Paragraph style={{ color: theme.colors.viewhed }}>mothermobile:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>0777525987</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>Mother Official Address:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>chavakachcheri</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>motheroldstudent:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>Yes</Paragraph></FormColumn>
                            </FormRow>
                        </Card>
                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading4 style={{
                                padding: "0", textAlign: "center", margin: "0", color: theme.colors.viewhed,
                                borderBottom: "2px solid #979797",
                                background: theme.colors.viewText,
                                borderRadius: theme.size.btnRadiusWhenHover
                            }}>sililings </Heading4>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>Name:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>sanpakees</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>sibilingsGrade:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>10A</Paragraph></FormColumn>
                            </FormRow>

                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>sililings Admission:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>2014chc39</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>sililings Admission:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>2015chc201</Paragraph></FormColumn>
                            </FormRow>
                        </Card>
                        <Card style={{ padding: "0.9em", color: theme.colors.viewText }}>
                            <Heading4 style={{
                                padding: "0", textAlign: "center", margin: "0", color: theme.colors.viewhed,
                                borderBottom: "2px solid #979797",
                                background: theme.colors.viewText,
                                borderRadius: theme.size.btnRadiusWhenHover
                            }}>Guardian Details</Heading4>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>guardian:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>father</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>guardian Name:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>guardianname</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>MobileNo:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>Email:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>father@gmail</Paragraph></FormColumn>
                            </FormRow>
                            <FormRow style={{ padding: "0" }}>
                                <FormColumn viewprofile><Paragraph style={{ color: theme.colors.viewhed }}>Occupation:</Paragraph></FormColumn>
                                <FormColumn viewprofile><Paragraph>fathername</Paragraph></FormColumn>
                            </FormRow>
                        </Card>
                    </FormRow>

                </FormRow>
                <FormRow>







                </FormRow>



            </FormColumn >

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

