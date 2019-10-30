import React, { Component } from 'react'
import Heading3 from '../../../components/typography/Heading3'
import Paragraph from '../../../components/typography/Paragraph'
import { connect } from 'react-redux';
import { getParents } from '../../../redux/actions/student/parentAction';
import Card from '../../../components/cards/Card';
import FlexContainer from '../../../components/layout/FlexContainer';
import FlexContent from '../../../components/layout/FlexContent';
import PrimaryCard from '../../../components/cards/PrimaryCard';


class ViewProfile extends Component {
    componentDidMount() {
        this.props.fetchParents();
    }
    render() {
        console.log(this.props.parentList);
        return (
            <FlexContainer>
                <FlexContent>
                    <Card >

                    </Card>
                </FlexContent>

            </FlexContainer>
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

