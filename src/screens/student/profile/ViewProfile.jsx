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

                            <Card style={{ height: "70px", width: "70px" }}>
                            </Card>
                            <FormColumn style={{}}>
                                <Heading2>Viththiyanathan Pakeesan</Heading2>
                                <Paragraph>Grade:</Paragraph>
                                <Paragraph>Addmision No:</Paragraph>
                            </FormColumn>



                        </FormRow>
                        <FormRow>
                            <FormColumn>
                                <Card style={{ height: "500px", width: "300px" }}>
                                    <FormRow style={{ padding: "0" }}>
                                        <Paragraph style={{ paddingTop: "-50px" }}>Name:</Paragraph><Paragraph style={{ padding: "-15px" }}>Viththiyanathan Pakeesan</Paragraph>
                                    </FormRow>
                                    <FormRow style={{ padding: "0" }}>
                                        <Paragraph style={{ paddingTop: "-15px" }}>Name:</Paragraph><Paragraph style={{ padding: "-15px" }}>{this.props.fetchParents.fatherName}</Paragraph>
                                    </FormRow>
                                    <Paragraph>Name:</Paragraph>
                                    <Paragraph>Name:</Paragraph>
                                    <Paragraph>Name:</Paragraph>
                                    <Paragraph>Name:</Paragraph>
                                    <Paragraph>Name:</Paragraph>
                                    <Paragraph>Name:</Paragraph>
                                    <Paragraph>Name:</Paragraph>
                                    <Paragraph>Name:</Paragraph>
                                </Card>
                                <Card style={{ height: "200px", width: "300px" }}>
                                </Card>

                            </FormColumn>
                            <FormColumn>
                                <Card style={{ height: "210px", width: "250px", paddingTop: "0" }}  >
                                    <Heading5>Father's Details</Heading5>
                                </Card>
                                <Card style={{ height: "210px", width: "250px", paddingTop: "0" }} >
                                    <Heading5>Mother's Details</Heading5>
                                </Card>
                                <Card style={{ height: "210px", width: "250px", paddingTop: "0" }}>
                                    <Heading5>Father's Details</Heading5>
                                </Card>

                            </FormColumn>

                            <FormColumn>
                                <Card style={{ height: "120px", width: "250px", paddingTop: "0" }}  >
                                    <Heading5>Father's Details</Heading5>
                                </Card>
                                <Card style={{ height: "120px", width: "250px" }}  >
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

