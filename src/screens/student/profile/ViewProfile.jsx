import React, { Component } from 'react'
import Heading3 from '../../../components/typography/Heading3'
import Paragraph from '../../../components/typography/Paragraph'
import { connect } from 'react-redux';
import { getParents } from '../../../redux/actions/student/parentAction';

class ViewProfile extends Component {
    componentDidMount() {
        this.props.fetchParents();
    }
    render() {
        console.log(this.props.parentList);
        return (
            <div>
                <Heading3>View Profile</Heading3>
                <Paragraph>Sample Content</Paragraph>
            </div>
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

