// import React, { Component } from 'react';
// import ClassFlex from "./ClassFlex";
// import Heading3 from '../../../components/typography/Heading3';
// import Selection from '../../../components/inputs/Select';
// import Label from '../../../components/typography/Label';
// import { Table, TableRow, TableHead, Tablebody } from '../../../components/table/Table1';
// import PrimaryCard from '../../../components/cards/PrimaryCard';
// import Card from '../../../components/cards/Card';
// import FlatInput from '../../../components/inputs/FlatInput';


// export default class AddClass extends Component {
//     render() {
//         return (
//             <Card style={{ width: "60em", height: "30em" }}>
//                 <flexContainer >
//                     <flexRow style={{ textAlign: "center" }}>
//                         <flexCol>
//                             <Heading3>Select grade</Heading3>
//                             <Selection style={{ textAlign: "center" }}>
//                                 <select>1</select>
//                             </Selection>
//                         </flexCol>
//                     </flexRow>

//                     <flexRow>
//                         <flexCol style={{ textAlign: "rigth" }}>
//                             <Table style={{ width: "20em" }}>
//                                 <TableRow heading>
//                                     <TableHead>Grade</TableHead>
//                                     <TableHead>Division</TableHead>
//                                     <TableHead>Actions</TableHead>
//                                     <TableHead>Actions</TableHead>
//                                 </TableRow>
//                                 <TableRow >
//                                     <Tablebody>1</Tablebody>
//                                     <Tablebody>A</Tablebody>
//                                     <Tablebody><img src="https://img.icons8.com/metro/15/000000/edit-property.png" />
//                                     </Tablebody>
//                                     <Tablebody><img src="https://img.icons8.com/material/22/000000/delete-forever--v2.png" />
//                                     </Tablebody>
//                                 </TableRow>
//                                 <TableRow >
//                                     <Tablebody>1</Tablebody>
//                                     <Tablebody>B</Tablebody>
//                                     <Tablebody><img src="https://img.icons8.com/metro/15/000000/edit-property.png" />
//                                     </Tablebody>
//                                     <Tablebody><img src="https://img.icons8.com/material/22/000000/delete-forever--v2.png" />
//                                     </Tablebody>
//                                 </TableRow>
//                                 <TableRow >
//                                     <Tablebody>1</Tablebody>
//                                     <Tablebody>C</Tablebody>
//                                     <Tablebody><img src="https://img.icons8.com/metro/15/000000/edit-property.png" />
//                                     </Tablebody>
//                                     <Tablebody><img src="https://img.icons8.com/material/22/000000/delete-forever--v2.png" />
//                                     </Tablebody>
//                                 </TableRow>
//                                 <TableRow >
//                                     <Tablebody>1</Tablebody>
//                                     <Tablebody>D</Tablebody>
//                                     <Tablebody><img src="https://img.icons8.com/metro/15/000000/edit-property.png" />
//                                     </Tablebody>
//                                     <Tablebody><img src="https://img.icons8.com/material/22/000000/delete-forever--v2.png" />
//                                     </Tablebody>
//                                 </TableRow>
//                             </Table>
//                             <Label></Label>
//                         </flexCol>

//                     </flexRow>
//                     <flexRow style={{ textAlign: "left" }}>

//                         <flexCol >
//                             <FlatInput></FlatInput>

//                         </flexCol>
//                     </flexRow>
//                 </flexContainer >
//             </Card >

//         )
//     }
// }
import React, { Component } from 'react'
import Heading3 from '../../../components/typography/Heading3'
import Paragraph from '../../../components/typography/Paragraph'
import Card from '../../../components/cards/Card'
import { FlexBoxContainer, FlexBoxRow, FlexBoxColumn } from '../../../screens/student/admission/admissionFlexBox'
import PrimaryButton from '../../../components/button/PrimaryButton'
import TogglerButton from '../../../components/button/TogglerButton'
import Selection from '../../../components/inputs/Select'
import Label from '../../../components/typography/Label'
import FlatInput from '../../../components/inputs/FlatInput'
import FloatingLabelInput from '../../../components/inputs/FloatingLabelInput'
import Input from '../../../components/inputs/Input'
import LargeIconOnlyButton from '../../../components/button/LargeIconOnlyButton'
import PlusIconPrimary from '../../../components/icon/PlusIconPrimary'
import SearchIconPrimary from '../../../components/icon/SearchIconPrimary'
import { Table, TableRow, TableHead, Tablebody } from '../../../components/table/Table1';
import TableCom from '../../Table'

const cardStyle = {
    textAlign: "center",
    width: "50em",
    height: "4em",
}
const cardStyle1 = {
    textAlign: "center",
    width: "50em",
    height: "20em",
}

const grades = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12 Arts' },
    { value: '12', label: '12 Maths' },
    { value: '12', label: '12 Bio' },
]

const divisions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' }
]

export default class AddClass extends Component {

    state = {
        GradeStatus: false,
        DevisionStatus: false,
        TableStatus: false
    }

    handleGrade() {
        this.setState({ GradeStatus: true, DevisionStatus: false, TableStatus: false })
    }
    handleDivision() {
        this.setState({ DevisionStatus: true, GradeStatus: true, TableStatus: true })
    }
    handleTable() {
        this.setState({ TableStatus: true, GradeStatus: false, DevisionStatus: false })
    }

    render() {
        return (
            <FlexBoxContainer>
                <FlexBoxRow>
                    <FlexBoxColumn>
                        <Card style={cardStyle}>
                            <FlexBoxRow style={{ justifyContent: "center" }}>
                                <FlexBoxColumn>
                                    <TogglerButton onClick={() => this.handleDivision()}>Select Grade</TogglerButton>
                                </FlexBoxColumn>
                            </FlexBoxRow>
                            <br />
                            <FlexBoxRow style={{ justifyContent: "space-between" }}>
                                <FlexBoxColumn>
                                    {/* <Selection options={grades} placeholder="Grades"></Selection> */}
                                </FlexBoxColumn>
                                {this.state.DevisionStatus ? <FlexBoxColumn>
                                    <Selection options={grades} placeholder="Grades"></Selection>
                                </FlexBoxColumn> : ""}
                                <FlexBoxColumn>
                                    {/* <Selection options={grades} placeholder="Grades"></Selection> */}
                                </FlexBoxColumn>
                            </FlexBoxRow>

                        </Card>
                        <Card style={cardStyle1}>
                            <FlexBoxRow style={{ justifyContent: "space-between" }}>
                                <FlexBoxColumn>
                                    <TogglerButton onClick={() => this.handleTable()}>Table</TogglerButton>
                                    <FlexBoxRow>
                                        {this.state.DevisionStatus ? <FlexBoxColumn>
                                            <Selection options={divisions} placeholder="Divisions"></Selection>
                                        </FlexBoxColumn> : ""}
                                    </FlexBoxRow>
                                    <TableCom />
                                </FlexBoxColumn>
                                <FlexBoxColumn>
                                    {/* <TogglerButton onClick={() => this.handleAdmission()}>By Admission No</TogglerButton> */}
                                </FlexBoxColumn>


                                <FlexBoxColumn>
                                    <TogglerButton onClick={() => this.handleName()}>Division</TogglerButton>
                                    {/* {this.state.DevisionStatus ? <FlexBoxColumn>
                                        <Selection options={divisions} placeholder="Divisions"></Selection>
                                    </FlexBoxColumn> : ""} */}
                                    {this.state.NameStatus ?
                                        <FlexBoxColumn>
                                            <Input placeholder="Division"></Input>
                                        </FlexBoxColumn> : ""}
                                    {this.state.NameStatus ? <FlexBoxColumn>
                                        <LargeIconOnlyButton primary>+</LargeIconOnlyButton>
                                    </FlexBoxColumn> : ""}
                                </FlexBoxColumn>

                            </FlexBoxRow>


                        </Card>
                    </FlexBoxColumn>
                </FlexBoxRow>
            </FlexBoxContainer >
        )
    }
}
